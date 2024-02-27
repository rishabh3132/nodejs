const fs=require('fs')
const http=require('http')
const server=http.createServer();
server.on('request',(req,res)=>{
    // fs.readFile('input.txt',(err,data)=>{
    //     if(err) return console.log(err);
    //     res.end(data.toString());
    // })

    //readable stream
    const rStream=fs.createReadStream('input.txt');
    rStream.on('data',(chunk)=>{
        res.write(chunk)
    })
    rStream.on('end',()=>{
        res.end()
    })
    rStream.on('error',(err)=>{
        console.log(err)
        res.end('File not found')
    })

})
server.listen(8000,'127.0.0.1');