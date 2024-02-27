const fs=require('fs')
const http=require('http')
const server=http.createServer();
server.on('request',(req,res)=>{
    ////1st way
    // fs.readFile('input.txt',(err,data)=>{
    //     if(err) return console.log(err);
    //     res.end(data.toString());
    // })

    // //2nd way - readable stream
    // const rStream=fs.createReadStream('input.txt');
    // rStream.on('data',(chunk)=>{
    //     res.write(chunk)
    // })
    // rStream.on('end',()=>{
    //     res.end()
    // })
    // rStream.on('error',(err)=>{
    //     console.log(err)
    //     res.end('File not found')
    // })

    ////3rd way
    const rStream=fs.createReadStream('input.txt');
    rStream.pipe(res);

})
server.listen(8000,'127.0.0.1');