// //Print console in VS code terminal using node {filename}
// const name='Rishabh Jain'
// console.log(name);

//access modules
const fs = require('fs');
////Create a new file
// fs.writeFileSync('read.txt','This file created using node js');
////update the file content
// fs.writeFileSync('read.txt','Hello Rishabh, This file created using node js');
// //append the content in the file
// fs.appendFileSync('read.txt','\nThis data is appended in the file');

//read the content of the file
let content=fs.readFileSync('read.txt');
console.log(content)//binary data
// In node JS there is additional datatype called Buffer which is used to store Binary data
{/* <Buffer 48 65 6c 6c 6f 20 52 69 73 68 61 62 68 2c 20 54 68 69 73 20 66 69 6c 65 20 63 72 65 61 74 65 64 20 75 73 69 6e 67 20 6e 6f 64 65 20 6a 73 0a 54 68 69 ... 30 more bytes> */}
console.log(content.toString());

//rename the file
fs.renameSync('read.txt','readwrite.txt');

function add(a=0,b=0){
    return a+b;
}

function sub(a=0,b=0){
    return a-b;
}

function mult(a=0,b=0){
    return a*b;
}

// module.exports.add=add;
// module.exports.sub=sub;

module.exports = {add,sub,mult};