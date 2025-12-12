## 🧠 Memoization (Cache)

Você está otimizando um sistema de navegação de foguetes. O cálculo de combustível necessário para uma viagem é uma operação matemática muito pesada e lenta.

Para economizar processamento, você deve implementar uma técnica chamada **Memoization**. A ideia é simples: se já calculamos o combustível para uma certa distância, não precisamos calcular de novo; basta devolver o resultado que guardamos na memória (cache).

**Desafio**
Como ainda não aprendemos a usar Objetos para criar um mapa de cache, usaremos **Arrays** para guardar o histórico.

Crie uma função `memorizar(funcaoLenta)` que:

1.  Aceita uma função como argumento.
2.  Retorna uma nova função otimizada.
3.  A nova função deve verificar se o valor de entrada já foi processado antes.
    - Se sim, retorna o valor guardado (sem rodar a função lenta).
    - Se não, roda a função lenta, guarda o resultado e retorna.

**Dica de Estrutura (Arrays Paralelos)**
Você pode usar dois arrays dentro do seu validador:

- `cacheEntradas`: guarda os números que foram passados.
- `cacheResultados`: guarda os resultados calculados.
  Use o índice de um para achar o valor no outro.

**Template**

```javascript
/**
 * Cria uma versão otimizada de uma função, usando cache.
 * @param {function} funcao - A função original (lenta).
 * @returns {function} Uma nova função que guarda os resultados.
 */
function memorizar(funcao) {
  // Crie seus arrays de cache aqui (Closure)

  return function (entrada) {
    // 1. Verifique se 'entrada' já existe no array de entradas.
    // 2. Se existir, retorne o resultado correspondente do array de resultados.
    // 3. Se não, execute a funcao(entrada), salve nos dois arrays e retorne.
  };
}
```

<details>
  <summary>🫣 Spoiler</summary>

> 1.  Use `const index = entradas.indexOf(entrada)` para procurar.
> 2.  Se `index !== -1`, significa que achou! Retorne `resultados[index]`.
> 3.  Se não achou, calcule: `const res = funcao(entrada)`.
> 4.  Salve: `entradas.push(entrada)` e `resultados.push(res)`.

</details>
