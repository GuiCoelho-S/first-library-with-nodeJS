const fs = require('fs');

function elicitLinks(text){
  const regex = /\[([^\]]*)\]\((https?\:\/\/[^\s]*)\)/gm;
  const arrResults = [];
  let tmp;

  while((tmp = regex.exec(text)) !== null){
    arrResults.push({ [tmp[1]]: tmp[2] }) 
  }
 
  return arrResults.length === 0 ? 'This file doesn`t have any link' : arrResults;
}

function catchError(err){
  throw new Error(err.code);
}

async function getArchive(pathFile){
  const encoding = 'utf-8';

  try {
    const textLinks = await fs.promises.readFile(pathFile, encoding)
    
    return elicitLinks(textLinks)
  } catch {
    catchError(err)
  }
}

module.exports = getArchive;
//getArchive('./arquivos/texto1.md')