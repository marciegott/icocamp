# Introdução à Modelagem de Dados (Data Modeling)

Antes de escrever código, todo sistema precisa responder a uma pergunta fundamental:

> **O que existe nesse problema e como isso deve ser representado no código?**

Modelagem de dados (**Data Modeling**) é o processo de **pensar e decidir como representar o mundo real dentro de estruturas de software**.  
Ela acontece **antes da implementação** e influencia diretamente a clareza, a qualidade e a evolução do código.


## O que significa modelar dados

Modelar dados não é escrever funções nem escolher sintaxe.  
É decidir:

- quais **coisas** existem no sistema  
- quais dessas coisas precisam ser representadas como objetos  
- quais informações cada objeto deve carregar  
- o que pode mudar com o tempo  
- quem deve ser responsável por cada comportamento  

Essas decisões vêm **antes do JavaScript**.

O código apenas executa a estrutura que você já pensou.



## Um exemplo do mundo real (YouTube)

Se você já fez upload de um vídeo no YouTube, você já lidou com modelagem de dados, mesmo sem chamar assim.

Na tela de upload, você define coisas como:
- título  
- descrição  
- duração  
- thumbnail  
- tags  
- restrição etária  
- status de publicação  

Nada disso é aleatório.  
Esses dados existem porque alguém **modelou o que é um vídeo** dentro do sistema do YouTube.

Esse curso parte exatamente dessa ideia:
> você já entende dados — agora vai aprender a estruturá-los conscientemente no código.


## Por que modelagem de dados é importante

Um sistema pode funcionar mesmo com uma modelagem ruim, mas ele tende a ser:

- difícil de entender  
- difícil de manter  
- difícil de expandir  
- propenso a bugs  

Uma boa modelagem de dados ajuda a:

- organizar o código  
- evitar lógica duplicada  
- deixar responsabilidades claras  
- facilitar a leitura e a colaboração  

Modelagem não é sobre “fazer dar certo”,  
é sobre **fazer sentido**.


## Modelagem não é específica de JavaScript

Os conceitos que você vai aprender aqui não pertencem a uma linguagem específica.

Eles vêm de áreas como:
- **Software Design**
- **Object-Oriented Design (OOD)**
- **Domain-Driven Design (DDD)**

Por isso, ao longo do curso:
- os conceitos serão explicados em português  
- os termos técnicos aparecerão também em inglês  
- todo código será escrito em inglês  

Isso prepara você para:
- ler documentação  
- estudar materiais internacionais  
- atuar no mercado global  


## O que você vai aprender neste mini-curso

De forma direta e objetiva, você vai aprender a identificar:

- **Entidade (Entity)** — o que existe por si só  
- **Coleção (Collection)** — o que organiza outras coisas  
- **Estado (State)** — o que muda com o tempo  
- **Responsabilidade (Responsibility)** — quem deve fazer o quê  

Esses conceitos formam a base da modelagem de dados e serão usados em exemplos simples (biblioteca) e em um estudo de caso real (YouTube).


## Próximo passo

No próximo capítulo, vamos começar pelo conceito mais importante da modelagem:

👉 **Entidade (Entity)** — como identificar o que realmente existe em um sistema.

➡️ [Ir para o próximo capítulo: Entidade (Entity)](./02-entidade.md)