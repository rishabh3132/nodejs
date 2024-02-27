const fs = require('fs')
let bioData={
    name:'Rishabh Jain',
    age:'21',
    city:'Jaipur'
}
let jsonString=JSON.stringify(bioData);
fs.writeFileSync('test.json',jsonString)
let filData=fs.readFileSync('test.json','utf-8');
console.log(filData);
let obj=JSON.parse(filData);
console.log(obj)