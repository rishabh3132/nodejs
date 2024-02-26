const fs=require('fs');
// fs.writeFile('read.txt','This is an async file',(data)=>{
//     console.log('File is created')
// })

// fs.appendFile('read.txt','Appending data using asynchronous way',(err)=>{
//     console.log('Data is appended')
// })

fs.readFile('read.txt',{encoding:'utf-8'},(err,data)=>{
    if(data){
        console.log(data)
    }else{
        console.log(err)
    }
})