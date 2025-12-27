# Responsabilidade (Responsibility)

Até aqui, aprendemos a identificar:
- **Entidades (Entities)** — o que existe
- **Coleções (Collections)** — o que organiza
- **Estado (State)** — o que muda com o tempo

Agora chegamos ao conceito que mais influencia a **qualidade do código**:

👉 **Responsabilidade (Responsibility)** — quem deve fazer o quê.

## O que é responsabilidade (Responsibility)

Responsabilidade é a decisão de **onde uma lógica deve viver**.

Em outras palavras:
- qual objeto deve conhecer determinado comportamento
- quem deve tomar determinada decisão
- quem deve executar determinada ação

Esse conceito vem do **Object-Oriented Design** e é fortemente ligado à clareza e manutenibilidade do código.


## Responsabilidade não é sintaxe

Responsabilidade **não tem a ver** com:
- `if`
- `for`
- métodos de array
- JavaScript especificamente

Ela tem a ver com **organização mental do sistema**.

Dois códigos podem funcionar, mas:
- um é confuso
- o outro é claro

A diferença quase sempre está na **distribuição de responsabilidades**.

## Exemplo de responsabilidade bem distribuída

Vamos observar como **Livro (Book)** e **Estante (Bookshelf)** têm responsabilidades diferentes e complementares.

### Responsabilidade do Livro (Book)

O livro conhece:
- seu número total de páginas
- quantas páginas já foram lidas
- seu próprio progresso de leitura

Essas informações fazem parte da **realidade do livro**, então a lógica deve morar nele.

```js
const book = {
  title: "Pride and Prejudice",
  totalPages: 432,
  pagesRead: 120,

  getReadingProgress() {
    return this.pagesRead / this.totalPages;
  },

  isFinished() {
    return this.pagesRead === this.totalPages;
  }
};
```

O livro:
- sabe calcular seu progresso
- sabe dizer se foi totalmente lido

Nenhum outro objeto deveria precisar saber como isso é calculado.


### Responsabilidade da Estante (Bookshelf)

A estante não sabe a leitura de um livro específico.
Ela é responsável por organizar e operar sobre um conjunto de livros.

const bookshelf = {
  books: [],

  addBook(book) {
    this.books.push(book);
  },

  getTotalBooks() {
    return this.books.length;
  },

  getReadBooksCount() {
    return this.books.filter(book => book.isFinished()).length;
  }
};

A estante:
- não calcula progresso de leitura
- não decide se um livro está lido
- apenas **consulta o comportamento do livro**


### O ponto-chave dessa separação

Repare que:
- o livro cuida de **detalhes internos**
- a estante cuida de **operações agregadas**

Cada objeto:
- faz pouco
- faz bem
- faz o que faz sentido no mundo real

Essa é a essência de uma boa **distribuição de responsabilidades (Responsibilities).**

## Erro comum: objeto que faz tudo

Um erro frequente é criar objetos que:
- conhecem detalhes demais
- calculam tudo
- tomam decisões que não são suas

Esses objetos costumam:
- crescer demais
- ficar difíceis de entender
- gerar efeitos colaterais inesperados

Esse tipo de objeto é conhecido informalmente como “God Object”.


## Regra mental para definir responsabilidades

Sempre pergunte:
> “Quem, no mundo real, deveria saber fazer isso?”

Se a resposta for:
- “o livro” → a lógica deve estar no livro
- “a estante” → a lógica deve estar na estante

Essa pergunta simples evita a maioria dos problemas de design em código iniciante.


## Relação com princípios de design

O conceito de responsabilidade está diretamente ligado a princípios conhecidos, como:
- **Single Responsibility Principle (SRP)**
> um objeto deve ter um único motivo para mudar

Você **não precisa dominar esses princípios agora**, mas é importante saber que:
- eles existem
- você já está aplicando a ideia central deles


## Por que responsabilidade é tão importante

Uma boa distribuição de responsabilidades:
- deixa o código mais legível
- facilita testes
- reduz acoplamento
- torna o sistema mais fácil de evoluir

Na prática, esse é o conceito que mais diferencia:
> código que “funciona” de código **bem escrito.**


## Próximo passo

Agora que já temos os quatro pilares da modelagem:
- Entity
- Collection
- State
- Responsibility

vamos aplicar tudo isso em um caso real e familiar:

👉 **modelagem de dados do YouTube.**

➡️ [Ir para o próximo capítulo: Estudo de caso — YouTube](./06-estudo-de-caso-youtube.md)
