const fs=require('fs')
const http=require('http')
const requests=require('requests')
let htmlFile=fs.readFileSync('home.html','utf-8');
let requestVal = (tempFile, val)=>{
    let temperatur=tempFile.replace('{%location%}',val.name);
    temperatur=temperatur.replace('{%country%}',val.sys.country);
    temperatur=temperatur.replace('{%temp%}',val.main.temp);
    temperatur=temperatur.replace('{%maxtemp%}',val.main.temp_max);
    temperatur=temperatur.replace('{%mintemp%}',val.main.temp_min);
    return [temperatur];
}
const server=http.createServer((req,res)=>{
    if(req.url=='/'){
        requests('https://api.openweathermap.org/data/2.5/weather?q=delhi&appid=')
        .on('data',(chunk)=>{
            console.log(JSON.parse(chunk));
            let weatherData=JSON.parse(chunk)
            let arrData=[weatherData]
            let myCurrentFile=arrData.map(data=>{
                return requestVal(htmlFile,data).join("")
            })
            console.log(myCurrentFile.join(""))
            res.write(myCurrentFile)
        })
        .on('end',(err)=>{
            if(err) return console.log(err);
            res.end()
        })
    }
})
server.listen(8000,'127.0.0.1');