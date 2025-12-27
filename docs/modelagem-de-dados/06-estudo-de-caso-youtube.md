# Estudo de caso — YouTube

Neste capítulo, vamos aplicar todos os conceitos aprendidos até agora em um **cenário real**: o YouTube.

O objetivo não é construir um sistema completo, mas **treinar o raciocínio de modelagem de dados**, passo a passo, como um engenheiro de software faria.

Avance com calma.  
Abra cada seção apenas quando sentir que já pensou o suficiente.

## Entendendo o domínio (Domain)

Antes de qualquer código, precisamos entender o **domínio (Domain)** — o contexto do problema.

Pense no processo de upload de um vídeo no YouTube.

### Pergunta inicial
> Quais são as coisas que claramente existem nesse domínio?

<details>
  <summary><strong>Ver possível resposta</strong></summary>

Algumas coisas que existem por si só:
- vídeos
- canais
- playlists

Neste estudo de caso, vamos focar apenas em **Video** e **Channel** para manter a complexidade controlada.
</details>

## Identificando entidades (Entities)

Agora vamos aplicar o primeiro conceito do curso.

### Pergunta
> Quais dessas coisas existem por si só, independentemente de outras?

<details>
  <summary><strong>Ver entidades principais</strong></summary>

As principais **entidades (Entities)** são:
- **Video**
- **Channel**

Ambas:
- possuem identidade própria
- continuam existindo mesmo que seus dados mudem
</details>

## Entidade: Video

Antes de pensar em código, pense conceitualmente.

### Pergunta
> Quais informações fazem parte de um vídeo no YouTube?

Tente listar mentalmente antes de abrir.

<details>
  <summary><strong>Ver exemplo de modelagem</strong></summary>

```js
const video = {
  title: "My First YouTube Video",
  description: "This is my first upload",
  durationInSeconds: 480,
  tags: ["javascript", "learning"],
  thumbnailUrl: "thumbnail.jpg",
  isPublished: false,
  isAgeRestricted: false
};
```
</details>

## Identificando estado (State) no Video

Nem todas as propriedades representam estado.

### Pergunta
> Quais propriedades mudam com o tempo?

<details>
  <summary><strong>Ver análise de estado</strong></summary>

| Property           | Type       |
|--------------------|------------|
| title              | fixed data |
| description        | fixed data |
| durationInSeconds  | fixed data |
| tags               | fixed data |
| isPublished        | state      |
| isAgeRestricted    | state      |

O vídeo continua sendo o mesmo, mesmo quando `isPublished` muda.
</details>

## Entidade: Channel

Agora pense no canal.

### Pergunta
> Um canal depende de um vídeo para existir?

<details>
  <summary><strong>Ver modelagem do Channel</strong></summary>

Não.  
Um **Channel** existe independentemente de vídeos, portanto também é uma entidade.

```js
const channel = {
  name: "My Learning Channel",
  ownerName: "Marcie"
};
```
</details>

## Identificando coleções (Collections)

Agora aplicamos o segundo conceito.

### Pergunta
> O que, nesse domínio, existe para organizar outras coisas?

<details>
  <summary><strong>Ver resposta</strong></summary>

O **Channel** existe, entre outras coisas, para **organizar vídeos**.

Isso nos leva a uma **coleção (Collection)** de vídeos dentro do canal.
</details>

## Channel como coleção de vídeos

Uma coleção não é apenas um array; ela tem responsabilidades.

### Pergunta
> Que tipo de ações fazem sentido para um canal em relação aos vídeos?

<details>
  <summary><strong>Ver exemplo de Channel como Collection</strong></summary>

```js
const channel = {
  name: "My Learning Channel",
  ownerName: "Marcie",
  videos: [],

  addVideo(video) {
    this.videos.push(video);
  },

  getPublishedVideos() {
    return this.videos.filter(video => video.isPublished);
  }
};
```
</details>

## Analisando responsabilidades (Responsibilities)

Observe a separação de responsabilidades:

| Element | Responsibility |
|--------|----------------|
| Video  | know its own state |
| Channel | organize and query videos |

O canal **não publica** o vídeo.  
Ele apenas **consulta o estado** do vídeo.

## Onde o estado vive (State ownership)

### Pergunta
> Onde deve viver o estado `isPublished`?

<details>
  <summary><strong>Ver explicação</strong></summary>

O estado vive no **Video**, porque:
- é o vídeo que muda de estado
- o canal apenas reage a isso

Duplicar esse estado no canal criaria inconsistência.
</details>

## O que deixamos de fora (intencionalmente)

### Pergunta
> Por que não modelamos comentários, likes ou analytics?

<details>
  <summary><strong>Ver explicação</strong></summary>

Porque modelagem também é **escolher o que não modelar**.

Adicionar muitos conceitos de uma vez:
- aumenta a carga cognitiva
- atrapalha o aprendizado do essencial
</details>

## Conclusão do estudo de caso

Neste capítulo, você praticou:

- identificação de entidades (Entities)
- criação de coleções (Collections)
- reconhecimento de estado (State)
- separação de responsabilidades (Responsibilities)

Tudo isso usando um sistema real que você já conhece.

## Próximo passo

Agora é sua vez de modelar sozinho.

➡️ [Ir para o próximo capítulo: Exercício final](./07-exercicio-final.md)
