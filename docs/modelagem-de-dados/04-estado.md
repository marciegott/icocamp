# Estado (State)

Até agora, vimos:
- **Entidades (Entities)**: o que existe por si só
- **Coleções (Collections)**: o que organiza entidades

Agora vamos entender um conceito fundamental para qualquer sistema real:

👉 **Estado (State)** — aquilo que **muda com o tempo**.


## O que é estado (State)

**Estado (State)** representa a **situação atual** de uma entidade em um determinado momento.

Uma entidade pode continuar sendo a mesma, mas seu estado pode mudar várias vezes ao longo do tempo.

Essas mudanças fazem parte do comportamento normal do sistema.


## Estado vs dados fixos

Nem toda propriedade de um objeto representa estado.

### Dados fixos (geralmente não mudam)
- título
- autor
- duração total
- número total de páginas

### Estado (muda com o tempo)
- lido / não lido
- publicado / não publicado
- páginas lidas
- disponível / emprestado

A diferença não é técnica, é **conceitual**.


## Exemplo: Livro (Book)

Um livro continua sendo o mesmo livro, mas seu estado pode mudar conforme a leitura avança.

```js
const book = {
  title: "Pride and Prejudice",
  totalPages: 432,
  pagesRead: 0,
  isRead: false
};
```

Conforme a leitura acontece:
- `pagesRead` aumenta
- `isRead` pode mudar para `true`

A identidade do livro não muda.
O que muda é o estado.


## Exemplo: Vídeo do YouTube (Video)

Um vídeo também passa por diferentes estados ao longo do tempo.

```js 
const video = {
  title: "My First YouTube Video",
  durationInSeconds: 480,
  isPublished: false,
  isAgeRestricted: false
};
```

Antes do upload:
- `isPublished` é false

Depois da publicação:
- `isPublished` passa a ser true

O vídeo continua sendo o mesmo vídeo.
O que mudou foi o estado.


## Por que identificar estado é importante

Identificar corretamente o estado ajuda a:
- evitar dados duplicados
- evitar inconsistências
- saber onde a lógica deve acontecer
- entender o ciclo de vida de uma entidade

Muitos bugs acontecem quando:
- o mesmo estado é armazenado em mais de um lugar
- não está claro quem pode mudar esse estado


## Erro comum: estado mal posicionado

Um erro comum é guardar estado em lugares errados.

Exemplo conceitual:
- guardar `isRead` na estante em vez de no livro
- guardar `isPublished` no canal em vez de no vídeo

Regra geral:
> O estado pertence à **entidade que vive aquela mudança.**


## Regra mental para identificar estado

Pergunte:
> “Isso pode mudar com o tempo enquanto a coisa continua sendo a mesma?”

Se a resposta for sim, isso provavelmente é estado (State).


## Próximo passo

Agora que já entendemos:
- o que existe (entidades)
- como se organiza (coleções)
- o que muda com o tempo (estado)

Chegamos ao conceito mais importante para manter código claro:

👉 quem deve fazer o quê.

➡️ [Ir para o próximo capítulo: Responsabilidade (Responsibility)](./05-responsabilidade.md)

