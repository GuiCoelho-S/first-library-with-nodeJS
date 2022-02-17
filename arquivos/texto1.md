A interface File provê informações sobre arquivos e permite ao javascript a acessar 
seu conteúdo.

São geralmente recuperados a partir de um objeto 
[FileList](https://developer.mozilla.org/pt-BR/docs/Web/API/FileList) que é 
retornado como resultado da seleção, pelo usuário, de arquivos através do elemento 
[<input>](https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element/Input), a 
partir do ojbeto 
[DataTransfer](https://developer.mozilla.org/pt-BR/docs/Web/API/DataTransfer) 
utilizado em operações de arrastar e soltar, ou a partir da API `mozGetAsFile()` em 
um 
[HTMLCanvasElement](https://devgeloper.mozilla.org/pt-BR/docs/Web/API/HTMLCanvasElement). 
Em Gecko, códigos com privilégios podem criar objetos File representando qualquer 
arquivo local sem a interação do usuário (veja [Implementation 
notes](https://developer.mozilla.org/pt-BR/docs/Web/API/File#impletation_notes) 
para mais informações.)
