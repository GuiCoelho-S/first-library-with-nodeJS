import * as fs from 'fs'; 
import chalk from 'chalk';

function catchError(err){
  throw new Error(chalk.redBright(err.code))
}

async function getFile(pathFile){
  const encoding = 'utf-8';
  try {
    const text = await fs.promises.readFile(pathFile, encoding)
    return console.log(chalk.greenBright(text));

  } catch (err){
    catchError(err)
  }
  console.log(chalk.greenBright(text))
}

getFile('./arquivos/texto1.md')


// function getFile(pathFile){
//   const encoding = "utf-8";
//   fs.readFile(pathFile, encoding, (err, text) => {
//     if(err) return  catchError(err);

//     console.log(chalk.greenBright(text))
//   })
// }

// function getFile(pathFile){
//   const endoing = 'utf-8';

//   fs.promises
//     .readFile(pathFile, endoing)
//     .then((text) => console.log(chalk.greenBright(text)))
//     .catch((err) => catchError(err))
// }
