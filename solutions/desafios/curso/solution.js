/**
 * Challenge: Course Progress Tracker (Solution)
 * This object demonstrates CRUD operations and dynamic data calculation.
 */

const myBootcamp = {
  name: "PrincessCamp",
  topics: [],

  // [CREATE] Adds a new topic object to the array
  addTopic(topicTitle) {
    // We push an object so we can track the title and status together
    this.topics.push({
      title: topicTitle,
      isCompleted: false,
    });
  },

  // [READ] Iterates and prints the list in a specific format
  listAll() {
    this.topics.forEach((topic) => {
      // Use a ternary operator to decide which symbol to show
      const status = topic.isCompleted ? "x" : " ";
      console.log(`- [${status}] ${topic.title}`);
    });
  },

  // [UPDATE] Finds a topic and sets status to true
  markAsComplete(topicTitle) {
    // .find() returns the ACTUAL object from the array (by reference)
    const topic = this.topics.find((t) => t.title === topicTitle);
    if (topic) {
      topic.isCompleted = true;
    } else {
      console.error(`Topic "${topicTitle}" not found.`);
    }
  },

  // [UPDATE] Finds a topic and sets status to false
  markAsIncomplete(topicTitle) {
    const topic = this.topics.find((t) => t.title === topicTitle);
    if (topic) {
      topic.isCompleted = false;
    }
  },

  // [DELETE] Filters the array to exclude the specific topic
  removeTopic(topicTitle) {
    // We overwrite the array with a new version that doesn't have the title
    this.topics = this.topics.filter((t) => t.title !== topicTitle);
  },

  // [GETTER] Calculates completion percentage dynamically
  get percentageComplete() {
    // Avoid division by zero if the array is empty
    if (this.topics.length === 0) {
      return "0% complete";
    }

    // Filter creates a temporary array of only finished items, then we get its length
    const completedCount = this.topics.filter((t) => t.isCompleted).length;
    const totalCount = this.topics.length;

    // Formula: (Part / Total) * 100
    const percentage = (completedCount / totalCount) * 100;

    return `${Math.round(percentage)}% complete`;
  },
};

// --- EXECUTION & TESTING ---

// 1. Populate
const coreTopics = [
  "Welcome to Learn JavaScript",
  "Introduction",
  "Conditionals",
  "Functions",
  "Scope",
  "Arrays",
  "Loops",
  "Iterators",
  "Objects",
  "Next Steps",
];
coreTopics.forEach((topic) => myBootcamp.addTopic(topic));

// 2. Update status
myBootcamp.markAsComplete("Welcome to Learn JavaScript");
myBootcamp.markAsComplete("Introduction");
myBootcamp.markAsComplete("Conditionals");
myBootcamp.markAsComplete("Functions");

// 3. Delete a topic to test CRUD
myBootcamp.removeTopic("Next Steps");

// 4. Output results
console.log(`--- Welcome to ${myBootcamp.name} ---`);
myBootcamp.listAll();
console.log("----------------------------");
console.log(`Progress: ${myBootcamp.percentageComplete}`);
