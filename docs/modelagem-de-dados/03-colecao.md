# Coleção (Collection)

No capítulo anterior, aprendemos a identificar **entidades (Entities)** — coisas que existem por si só, como livros e músicas.  
Agora vamos dar o próximo passo da modelagem de dados: entender **como essas entidades são organizadas**.

Para isso, usamos o conceito de **coleção (Collection)**.

## O que é uma coleção (Collection)

Uma **coleção (Collection)** é algo que:

- existe para **agrupar entidades**
- não faz sentido sem os elementos que contém
- organiza, gerencia ou opera sobre um conjunto de entidades

Diferente de uma entidade, uma coleção **não representa algo individual**, mas sim um **conjunto**.


## Coleção não é apenas um array

Em JavaScript, é comum pensar que uma coleção é apenas um array.  
Mas, em modelagem de dados, uma coleção costuma ser **um objeto que contém um array**, além de responsabilidades próprias.

Ou seja:
- o array guarda os dados
- a coleção dá **significado** a esse agrupamento


## Exemplo: Estante (Bookshelf)

Uma **estante (Bookshelf)** é um ótimo exemplo de coleção:

- ela não existe sem livros
- ela não tem páginas, autor ou gênero
- ela serve para **organizar livros**

```js
const bookshelf = {
  books: []
};
```

A estante:
- contém livros
- não é um livro

Essa relação é conhecida como:
> “contém” ou has many


## Exemplo: Library

Uma biblioteca (Library) é uma coleção de nível mais alto.

Ela pode conter:
- várias estantes
- ou diretamente vários livros

```js
const library = {
  bookshelves: []
};
```

Perceba que:
- a biblioteca não substitui o livro
- ela apenas organiza livros em uma estrutura maior


## O que uma coleção costuma fazer

Uma coleção geralmente é responsável por:
- adicionar entidades
- remover entidades
- buscar entidades
- calcular informações agregadas (totais, contagens)

Por exemplo:
- quantos livros existem
- quantos livros foram lidos
- quantos livros de um gênero específico

Essas ações não pertencem à entidade individual, mas sim à coleção.


## O que uma coleção NÃO deve fazer

Uma coleção não deve:
- conhecer detalhes internos demais de uma entidade
- tomar decisões que pertencem à entidade
- guardar estado que deveria estar no objeto individual

Exemplo:
- a estante não decide se um livro está lido
- a estante apenas consulta essa informação no livro


## Regra mental para identificar coleções

Pergunte:
> “Isso existe para organizar outras coisas?”

Se a resposta for **sim**, provavelmente você está lidando com uma coleção (**Collection**).

Se algo perde o sentido quando está vazio, isso é um forte indício de que se trata de uma coleção.


## Por que coleções são importantes

Coleções ajudam a:
- manter o código organizado
- evitar lógica espalhada
- centralizar operações sobre grupos de entidades
- deixar responsabilidades mais claras

Elas são essenciais para sistemas que lidam com **múltiplos objetos do mesmo tipo**.


## Próximo passo

Agora que já sabemos:
- o que existe (**entities**)
- como essas coisas são organizadas (**collections**)

O próximo conceito é entender:

👉 o que muda com o tempo dentro desses objetos.

➡️ [Ir para o próximo capítulo: Estado (State)](./04-estado.md)