<h1 align="center">Caso de estudo: uso de Promisses</h1>

<br>
Ao utilizar promisses, estamos criando um código assíncrono os principais métodos depois de invocar uma promisse são `then` e `catch`

```jsx
import * as fs from 'fs'; 
import chalk from 'chalk';

function catchError(err){
  throw new Error(chalk.redBright(err.code))
}

function getFile(pathFile){
  const endoing = 'utf-8';

  fs.promises
    .readFile(pathFile, endoing)
    .then((text) => console.log(text))
    .catch((err) => catchError(err))
}

getFile('./arquivos/texto1.md')
```

Enquanto  o javascript está entre a promisse e o then, n é possível pegar o valor do produto. Apenas na função de callback do `.then`

---

### Async e await

```jsx
async function getFile(pathFile){
  const encoding = 'utf-8';
  const text = await fs.promises.readFile(pathFile, encoding)
  console.log(chalk.greenBright(text))
}
```

- Usando try catch

```jsx
import * as fs from 'fs'; 
import chalk from 'chalk';

function catchError(err){
  throw new Error(chalk.redBright(err.code))
}

async function getFile(pathFile){
  const encoding = 'utf-8';
  try {
    const text = await fs.promises.readFile(pathFile, encoding);
    return console.log(chalk.greenBright(text));

  } catch (err){
    catchError(err)
  }
  console.log(chalk.greenBright(text))
}

getFile('./arquivos/texto1.md')
```

Ainda existe um último bloco, o `finally`, que é executado sempre, independentemente da execução do código ter sido resolvida no `try`  ou gerado um erro passado para o `catch`. Tanto `catch`  quanto `finally`  são opcionais, mas o `try`  deve sempre estar acompanhado de um ou outro.

---

Porém a outra forma de trabalhar com requisições assíncronas, utilizando o `async` e `await`

Além do constructor Promisse, geralmente usado quando não temos uma função de callback já esperada, como é o caso quando se usa um método `fetch().`

- Exemplo de promisse
    
    
    - Uma promisse sempre tem dois argumentos `resolve` e `reject`.
    
    ```jsx
    function promessa(bool) {
     const x = bool;
     return new Promise((resolve, reject) => {
       if (!x) {
         reject(new Error("falha na promessa"));
       }
       resolve("sucesso na promessa");
     });
    }
    
    function exibeResposta(textoResult) {
     console.log(textoResult);
    }
    
    promessa(true)
     .then((texto) => exibeResposta(texto))
    // sucesso na promessa
    ```
    
    Neste caso, passamos um texto como parâmetro de cada um deles. Quando executamos a função `promise(true)`  este valor é carregado através das promessas até ser passado para a função `exibeResposta(texto)` , que por fim vai exibir a mensagem correta. No caso de `promessa(false)` , além da mensagem “falha na promessa” o NodeJS também vai lançar no terminal a stacktrace do objeto `Error`.
    
    1. Promessas podem ser concluídas de duas formas: *fulfilled* (realizada, completa) ou *rejected* (rejeitada), o que equivale a duas situações possíveis, ou a promessa se concretizou (retornou os dados ou executou o código que deveria) ou não.
    2. Promessas que não estão *fulfilled* nem *rejected* estão *pending* (pendentes). Ou seja, ainda não é possível saber o resultado final porque o processamento ainda não foi concluído.
    3. Após a finalização do processamento, a promessa passa para o estado de *settled* (concluída), independente do resultado.
    4. Uma vez que a promessa está *settled* seu resultado não se altera mais. Ou seja, uma promessa que se concluiu como *rejected* não muda mais para o estado de *fulfilled* e vice-versa.

<br><br>

# Regex - Expressões regulares


Serve para identificar padrões em strings, e manipular como você quiser.

[regex101: build, test, and debug regex](https://regex101.com/)

Ao criar uma classe, dizemos que queremos que procure tais letras, mas n que sejam somente em sequência `[abc]`

`[abc]` Pegará tudo dentro do texto que seja a | b | c

`[^abc]` pegará tudo que não for  a | b | c.

Para pegar caracteres especiais como [, precisamos utilizar uma barra invertida antes. `\[`

- `\w` → pega toda estrutura que seja reconhecida como palavra
- * → pegue tudo do 0, até o final
- `?` → caractere opicional

<br><br>

| input | output |
| --- | --- |
| \[[\w]*\] | Pega elementos [word]  |
| \[ | Elemento colchetes [  |
| [\w]* | Pega todas palavras dentro de [  |
| \] | Fecha a expressão. |

<br><br>

`\[\w\s*]\]` → pega tudo que for palavra que possuir espaço em branco

Outra forma `\[[^]]*\]`

Segunda parte, pegando o modelo (https://qualquercoisa) ou (http://qualquercoisa)

`\(https?\:\/\/[^$#\s].[^\s]*\)`

<br><br>

| s? | s é opicional |
| --- | --- |
| [^$#\s] | pegue todos os caracteres que não sejam desse jeito. |
| .[^\s] | Ande até encontrar um espaço branco |
| *\) | Faça isso até encontrar uma ) |

<br>

Expressão completa para pegar links em markdown: `\[([^\]]*)\]\((https?\:\/\/[^\s]*)\)`

Ao colocar `()` englobando tudo estamos criando grupos.

Em javascript para adicionar uma espessão regex, ela deve estar entre / /

```jsx
const regex = /\[([^\]]*)\]\((https?\:\/\/[^\s]*)\)/gm;
//gm -> global multi line

//output:

/*
[
  '[FileList](https://developer.mozilla.org/pt-BR/docs/Web/API/FileList)',
  '[<input>](https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element/Input)',
  '[DataTransfer](https://developer.mozilla.org/pt-BR/docs/Web/API/DataTransfer)',
  '[HTMLCanvasElement](https://devgeloper.mozilla.org/pt-BR/docs/Web/API/HTMLCanvasElement)',
  '[Implementation notes](https://developer.mozilla.org/pt-BR/docs/Web/API/File#impletation_notes)'
]
*/
```