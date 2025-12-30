# 📚 Bootcamp Marcie — Semana 1  
## JavaScript 1: dados, lógica e leitura de código

Projeto em evolução: **Minha Estante Virtual**


## 🎯 Objetivo da semana

Ao final desta semana, a aluna será capaz de:

- Representar dados do mundo real usando **arrays e objetos**
- Criar **funções** para processar dados
- Utilizar os métodos:
  - `.map`
  - `.filter`
  - `.reduce`
- Ler código JavaScript com mais segurança
- Resolver um problema real **sem interface gráfica**

> Nesta semana, **não há HTML nem CSS**.  
> O foco é **pensar como programadora**.


## 🧠 Conceito central da semana

> Programar é **transformar dados de entrada em dados de saída**.

Antes de telas, formulários ou backend, precisamos aprender a:
- organizar informações
- responder perguntas sobre esses dados


## 🧩 Domínio do problema: Minha Estante Virtual

Nesta etapa, a estante existe apenas em JavaScript.

Cada livro será representado como um **objeto** dentro de um **array**.

### Estrutura base de um livro

```js
{
  title: "Dom Casmurro",
  author: "Machado de Assis",
  pages: 256,
  read: true,
  category: "Literatura Brasileira"
}
```

### Estrutura da estante

```js
const books = [
  {
    title: "Dom Casmurro",
    author: "Machado de Assis",
    pages: 256,
    read: true,
    category: "Literatura Brasileira"
  },
  {
    title: "A Hora da Estrela",
    author: "Clarice Lispector",
    pages: 88,
    read: false,
    category: "Literatura Brasileira"
  }
];
```


## 📘 Conteúdos da semana (com intenção pedagógica)

### 1️⃣ Arrays e objetos (revisão aplicada)

- Array → coleção de coisas  
- Objeto → uma coisa com propriedades  

Exemplo mental:
- **Array** = prateleira  
- **Objeto** = livro  


### 2️⃣ Funções como “máquinas”

Função:
- recebe dados
- processa
- devolve um resultado

```js
function isRead(book) {
  return book.read === true;
}
```

> Uma função **não deve imprimir**, ela deve **retornar**.


### 3️⃣ `.filter()` — selecionar livros

Usado quando queremos:
- pegar **parte** da estante

```js
const readBooks = books.filter(book => book.read === true);
```


### 4️⃣ `.map()` — transformar dados

Usado quando queremos:
- mudar o formato da informação

```js
const bookTitles = books.map(book => book.title);
```


### 5️⃣ `.reduce()` — resumir a estante

Usado quando queremos:
- transformar muitos valores em **um só**

```js
const totalPages = books.reduce((total, book) => {
  return total + book.pages;
}, 0);
```


## 🧪 Exercícios guiados (obrigatórios)

### Exercício 1 — Total de livros

Criar uma função que retorna a quantidade total de livros da estante.

<details>
    <summary>Ver resposta</summary>

```js
function getTotalBooks(books) {
  return books.length;
}
```

</details>


### Exercício 2 — Livros lidos e não lidos

Criar funções que retornam:
- quantidade de livros lidos
- quantidade de livros não lidos

💡 Usar `.filter()` ou `.reduce()`.


### Exercício 3 — Total de páginas

Criar uma função que retorna:
- total de páginas da estante

Obrigatório usar `.reduce()`.


### Exercício 4 — Total de páginas lidas

Criar uma função que:
- considera apenas livros lidos
- soma o total de páginas lidas


## 🏁 Desafio da semana (entrega principal)

### Desafio: Estatísticas da Estante

Criar um arquivo `books.js` que contenha:

1. Um array `books` com pelo menos **5 livros**
2. Funções que retornem:
   - total de livros
   - total de livros lidos
   - total de livros não lidos
   - total de páginas
   - total de páginas lidas
3. `console.log` com frases legíveis, por exemplo:

```txt
Total de livros: 5
Livros lidos: 3
Livros não lidos: 2
Total de páginas: 1240
Total de páginas lidas: 820
```


## ✅ Critérios de conclusão da semana

A semana só é considerada concluída se a aluna consegue:

- [ ] Explicar o que é um array
- [ ] Explicar o que é um objeto
- [ ] Dizer quando usar `map`, `filter` e `reduce`
- [ ] Ler uma função e explicar o que ela faz
- [ ] Alterar o array de livros sem quebrar o código


## 📎 Material de apoio

- MDN — Array.prototype.reduce  
- MDN — Array.prototype.filter  
- Codecademy — JavaScript Functions  
- DevDocs — JavaScript Array Methods  


## 🔍 Observação pedagógica

Nesta semana:
- errar é esperado
- decorar sintaxe **não é objetivo**
- entender o *porquê* de cada função é o foco

> A interface virá depois.  
> Primeiro, aprendemos a **pensar em dados**.
