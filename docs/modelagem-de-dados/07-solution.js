/*
  Possible solution for the "Virtual Bookshelf" modeling challenge.

  Notes (in Portuguese, because the course is bilingual):
  - The "Book" is an Entity (Entity): it has its own identity and state (State).
  - The "ShelfSection" is a Collection (Collection): it groups books and provides aggregate operations.
  - The "Bookshelf" is also a Collection (Collection): it groups sections and provides higher-level aggregate operations.
  - Responsibilities (Responsibilities):
      - Book: knows its own reading progress and loan state.
      - ShelfSection: organizes books and counts/filters them.
      - Bookshelf: organizes sections and provides totals across sections.
*/

// -----------------------------
// Helpers
// -----------------------------

/*
  Small helper to create a loan object.
  We keep it simple and store only borrowerName and loanDate.
*/
function createLoan(borrowerName, loanDateISO) {
  return {
    borrowerName: borrowerName,
    loanDateISO: loanDateISO
  };
}

// -----------------------------
// Entity: Book
// -----------------------------

/*
  Book (Entity) + State (State):
  - readingStatus can be "to_read" | "reading" | "finished"
  - pagesRead changes over time
  - loan changes over time (null or an object)
*/
function createBook({
  title,
  author,
  category,
  language,
  totalPages
}) {
  return {
    title: title,
    author: author,
    category: category,
    language: language,
    totalPages: totalPages,

    readingStatus: "to_read",
    pagesRead: 0,
    loan: null,

    // Returns reading progress as a number from 0 to 1.
    getReadingProgress() {
      if (this.totalPages === 0) return 0;
      return this.pagesRead / this.totalPages;
    },

    // Returns true if book is finished.
    isFinished() {
      return this.readingStatus === "finished";
    },

    // Updates pagesRead and readingStatus consistently.
    updatePagesRead(newPagesRead) {
      // Basic validation
      if (typeof newPagesRead !== "number") return;
      if (newPagesRead < 0) return;
      if (newPagesRead > this.totalPages) return;

      this.pagesRead = newPagesRead;

      if (this.pagesRead === 0) {
        this.readingStatus = "to_read";
        return;
      }

      if (this.pagesRead < this.totalPages) {
        this.readingStatus = "reading";
        return;
      }

      if (this.pagesRead === this.totalPages) {
        this.readingStatus = "finished";
      }
    },

    // Loan handling (optional part of the challenge)
    isLoaned() {
      return this.loan !== null;
    },

    loanTo(personName, loanDateISO) {
      // Can't loan a book that is already loaned
      if (this.isLoaned()) return;

      this.loan = createLoan(personName, loanDateISO);
    },

    returnFromLoan() {
      this.loan = null;
    }
  };
}

// -----------------------------
// Collection: ShelfSection
// -----------------------------

function createShelfSection(name) {
  return {
    name: name,
    books: [],

    addBook(book) {
      this.books.push(book);
    },

    getTotalBooks() {
      return this.books.length;
    },

    getReadBooksCount() {
      return this.books.filter(book => book.isFinished()).length;
    },

    getBooksByLanguage(language) {
      return this.books.filter(book => book.language === language);
    },

    getBooksByCategory(category) {
      return this.books.filter(book => book.category === category);
    },

    getLoanedBooks() {
      return this.books.filter(book => book.isLoaned());
    }
  };
}

// -----------------------------
// Collection: Bookshelf
// -----------------------------

function createBookshelf(ownerName) {
  return {
    ownerName: ownerName,
    sections: [],

    addSection(section) {
      this.sections.push(section);
    },

    /*
      Adds a book to a section by sectionName.
      If the section does not exist, we do nothing.
    */
    addBookToSection(book, sectionName) {
      const section = this.sections.find(section => section.name === sectionName);
      if (!section) return;

      section.addBook(book);
    },

    getTotalBooks() {
      return this.sections.reduce((total, section) => {
        return total + section.getTotalBooks();
      }, 0);
    },

    getTotalReadBooks() {
      return this.sections.reduce((total, section) => {
        return total + section.getReadBooksCount();
      }, 0);
    },

    getLoanedBooks() {
      // Flatten results from all sections
      return this.sections.flatMap(section => section.getLoanedBooks());
    },

    getBooksCountByLanguage(language) {
      return this.sections.reduce((total, section) => {
        return total + section.getBooksByLanguage(language).length;
      }, 0);
    },

    getBooksCountByCategory(category) {
      return this.sections.reduce((total, section) => {
        return total + section.getBooksByCategory(category).length;
      }, 0);
    },

    /*
      Returns a simple summary object with totals.
      (In a real system you might format it differently.)
    */
    getSummary() {
      return {
        ownerName: this.ownerName,
        totalBooks: this.getTotalBooks(),
        totalReadBooks: this.getTotalReadBooks(),
        totalLoanedBooks: this.getLoanedBooks().length
      };
    }
  };
}

// -----------------------------
// Example usage (demo)
// -----------------------------

// Create some books
const book1 = createBook({
  title: "Pride and Prejudice",
  author: "Jane Austen",
  category: "romance",
  language: "en",
  totalPages: 432
});

const book2 = createBook({
  title: "Las niñas del naranjel",
  author: "Gabriela Cabezón Cámara",
  category: "fiction",
  language: "es",
  totalPages: 240
});

const book3 = createBook({
  title: "Uma Fazenda com a Magia do Natal",
  author: "Laurie Gilmore",
  category: "romance",
  language: "pt",
  totalPages: 320
});

// Update reading state
book1.updatePagesRead(120);   // now "reading"
book2.updatePagesRead(240);   // now "finished"
book3.updatePagesRead(0);     // still "to_read"

// Loan a book (optional)
book1.loanTo("Ana", "2025-12-27");

// Create sections
const spanishRomanceSection = createShelfSection("Spanish Romance");
const tbrSection = createShelfSection("TBR");
const favoritesSection = createShelfSection("Favorites");

// Create bookshelf
const bookshelf = createBookshelf("Marcie");

// Add sections to bookshelf
bookshelf.addSection(spanishRomanceSection);
bookshelf.addSection(tbrSection);
bookshelf.addSection(favoritesSection);

// Add books into sections
bookshelf.addBookToSection(book2, "Spanish Romance");
bookshelf.addBookToSection(book3, "TBR");
bookshelf.addBookToSection(book1, "Favorites");

// Demonstrate outputs
console.log("Summary:", bookshelf.getSummary());
console.log("Total books:", bookshelf.getTotalBooks());
console.log("Total read books:", bookshelf.getTotalReadBooks());

console.log("Books in Portuguese (pt):", bookshelf.getBooksCountByLanguage("pt"));
console.log("Romance books:", bookshelf.getBooksCountByCategory("romance"));

console.log("Loaned books:", bookshelf.getLoanedBooks().map(book => book.title));
console.log("Book1 reading progress:", book1.getReadingProgress());