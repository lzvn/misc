//This has to be done in the book's page
//types are text/plain, text/html, application/json and application/rainbows+unicorn
//I cheated looking at the answer, part of it was the headers being wrong, part of it
//is the logic with the awaits and asyncs
async function getAuthorData(type) {
  let resp = await fetch("https://eloquentjavascript.net/author", 
        { headers: { accept: type } })
  console.log(await resp.text())
  }
getAuthorData("application/json")
