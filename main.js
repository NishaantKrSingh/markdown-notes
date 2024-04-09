const fs = require('fs')
const { exec } = require('child_process');

const command = 'npm start';
let prev = {}
let af = {}

while (true) {
    let stats = fs.statSync('content.md')
    af = stats.mtime.getTime()
    if(prev != af){
        console.log("prev", prev);
        console.log("af", af);
        
        exec(command, (error, stdout, stderr) => {
            if (error) {
              console.error(`Error executing command: ${error}`);
              return;
            }
            console.log(`stdout: ${stdout}`);
            console.error(`stderr: ${stderr}`);
          });

        prev = af
        
    }
    (async () => {
        await new Promise(resolve => setTimeout(resolve, 5000));
    })
}