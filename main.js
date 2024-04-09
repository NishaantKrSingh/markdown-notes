const fs = require('fs')

let prev = {}
let af = {}

while (true) {
    let stats = fs.statSync('content.md')
    af = stats.mtime.getTime()
    if(prev != af){
        console.log("prev", prev);
        console.log("af", af);
        prev = af
    }
}