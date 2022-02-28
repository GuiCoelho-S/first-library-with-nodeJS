const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

function handleErrors(err){
  throw new Error(err.message);
}
 
async function checkstatus(urlArrays){
  
  try {
    const statusArray = await Promise
    .all(urlArrays
      .map(async url => {
        console.log(url); 
        const res = await fetch(url);
        return `${res.status} - ${res.statusText}`;
  }))
      return statusArray

  } catch(err){
      handleErrors(err);
  }
}

function getUrlArray(linksArray){
  return linksArray
    .map(LinkObj => Object
      .values(LinkObj).join());
}

async function validateUrl(linksArray){
  const links = getUrlArray(linksArray)
  const statusLinks = await checkstatus(links);
  
  const results = linksArray.map((obj, index) => ({
    ...obj, 
    status: statusLinks[index]
  }));
  return results
}

module.exports = validateUrl;