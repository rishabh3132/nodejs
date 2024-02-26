const fs = require('fs');
//Synchronouse
// let data=fs.readFileSync('read.txt','utf-8');
// console.log(data)
// console.log('After the data')

//Asynchronouse
fs.readFile('read.txt','utf-8',(err,data)=>{
    console.log(data);
});
console.log('After the data')