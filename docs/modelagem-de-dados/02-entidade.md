# Entidade (Entity)

No capítulo anterior, falamos sobre **modelagem de dados (Data Modeling)** como a forma de representar o mundo real no código.  
O primeiro passo desse processo é identificar **o que realmente existe no problema**.

Essas coisas que existem por si só chamamos de **entidades (Entities)**.


## O que é uma entidade (Entity)

Uma **entidade (Entity)** é algo que:

- existe de forma independente  
- possui **identidade própria**  
- continua sendo a mesma coisa mesmo que seus dados mudem  

O ponto mais importante aqui é a **identidade**.

Os valores de uma entidade podem mudar, mas ela continua sendo “ela mesma”.


## Identidade vs propriedades

Ao modelar uma entidade, é comum confundir:

- **identidade**  
- **propriedades**

As propriedades descrevem a entidade, mas **não definem quem ela é**.

Por exemplo:
- um livro pode mudar de status (lido ou não)
- pode mudar de estante
- pode ser relido

Mesmo assim, ele continua sendo **aquele livro**.


## Exemplo: Book

Um **livro (Book)** é uma entidade porque:
- ele existe sozinho
- não depende de outro objeto para existir
- pode mudar de estado ao longo do tempo

Em JavaScript, podemos representar esse livro assim:

```js
const book = {
  title: "Pride and Prejudice",
  genre: "Romance",
  totalPages: 432,
  isRead: false
};
```

Se `isRead` mudar de false para true, o livro não deixa de ser o mesmo livro. A identidade permanece.

### Exemplo: Song

Uma música (Song) também é uma entidade:
 - ela existe independentemente de playlists
 - pode estar associada a diferentes contextos
 - não perde sua identidade ao mudar de estado

```js
const music = {
  title: "Yellow",
  artist: "Coldplay",
  durationInSeconds: 260
};
```

A música continua sendo a mesma, independentemente de:
 - estar ou não em uma playlist
 - estar tocando ou não
 - ser adicionada ou removida de uma coleção


## O que normalmente NÃO é uma entidade

Nem tudo que aparece no sistema é uma entidade.

Em geral, não são entidades:
 - listas
 - agrupadores
 - organizadores
 - estruturas que só existem para conter outras coisas

Esses casos costumam ser coleções (Collections), que veremos no próximo capítulo.


## Regra mental para identificar entidades

Sempre pergunte:
> “Isso existe sozinho no mundo real?”

Se a resposta for sim, provavelmente você está lidando com uma entidade (Entity).

Se a resposta for não, talvez seja uma coleção ou apenas um detalhe de outra entidade.


## Por que entidades são tão importantes

Entidades são a base da modelagem de dados porque:
 - elas definem o vocabulário do sistema
 - tudo o mais gira em torno delas
 - uma má definição de entidades gera confusão em todo o código

Quando você identifica bem as entidades, o restante da modelagem fica muito mais claro.


## Próximo passo

Agora que já sabemos identificar o que existe, o próximo passo é entender:

👉 como essas entidades são organizadas e agrupadas.

➡️ [Ir para o próximo capítulo: Coleção (Collection)](./03-colecao.md)
