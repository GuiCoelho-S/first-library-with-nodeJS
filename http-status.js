import chalk from "chalk";
import fetch from "node-fetch";

async function checkstatus(urlArrays){
  
  const statusArray = await Promise.all(urlArrays.map(async url => {
    console.log(chalk.greenBright(url))
    const res = await fetch(url);
    return res.status
  }))
  return statusArray
}

function getUrlArray(linksArray){
  return linksArray.map(LinkObj => Object.values(LinkObj).join());
}

async function validateUrl(linksArray){
  const links = getUrlArray(linksArray)
  const statusLinks = await checkstatus(links);

  return statusLinks
}

export { validateUrl }