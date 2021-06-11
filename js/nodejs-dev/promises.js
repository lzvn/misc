function checkWork(done)
{
  let promise = new Promise( (resolve, reject) =>
  {
    if(done===true)
    {
      workDone="My job is done";
      resolve(workDone);
    }
    else
    {
      workDone="I have failed";
      reject(workDone);
    }
  })

  return promise;
}

checkWork(false).then(ok => console.log(ok)).catch(failed => console.log(failed));
