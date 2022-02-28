const getArchive = require('./index');
const validateUrl = require('./http-status');
const path = process.argv;

async function textProcess(pathFile){
  const result = await getArchive(pathFile[2]);

  if(pathFile[3] === 'validate'){
    console.log('links validados', await validateUrl(result))
  } else
  console.log('lista de links', result)
}

textProcess(path)
