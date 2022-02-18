import chalk from "chalk";
import getArchive from "./index.js";

const path = process.argv;

async function textProcess(pathFile){
  const result = await getArchive(pathFile[2]);
  console.log(chalk.yellow('lista de links'), result)
}

textProcess(path)
