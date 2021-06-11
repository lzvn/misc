'use strict'

/*Bad way to do it*/
/*
let i = 0;
while(1)
  { console.log(i);
    if(i===10) 
        process.exit(1);
    i++; }
*/

let i = 0;

while(1)
  { console.log(i);
    if(i===10)
        process.kill(process.pid, 'SIGTERM') 
    i++; }
