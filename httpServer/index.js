const fs = require('fs');
const http=require('http');
const server=http.createServer((req,res)=>{
    console.log(req.url);
    if(req.url=='/'){
        res.end('Home Page')
    }else if(req.url=='/about'){
        res.end('About Page')
    }else if(req.url=='/contact'){
        res.end('Contact Page')
    }else if(req.url=='/userapi'){
        // res.end('User API Page')
        fs.readFile('./userApi/api.json','utf-8',(err,data)=>{
            res.writeHead(200,{"content-type":"application/json"})
            res.end(data)
        });
    }else{
        res.writeHead(404,{"content-type":"text/html"});
        res.end('<h1>No Page Found</h1>')
    }
})
server.listen(8000,'127.0.0.1',()=>{
    console.log('Listening to the server 8000');
})