import chalk from "chalk";
import { getArchive } from "./index.js";
import { validateUrl } from "./http-status.js";

const path = process.argv;

async function textProcess(pathFile){
  const result = await getArchive(pathFile[2]);

  if(pathFile[3] === 'validate'){
    console.log(chalk.yellow('links validados'), await validateUrl(result))
  } else
  console.log(chalk.yellow('lista de links'), result)
}

textProcess(path)
