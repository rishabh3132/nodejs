const EventEmitter = require('events');
const event=new EventEmitter();
event.on('sayMyName',(name)=>{
    console.log(`Your Name is ${name[0]}`)
})
event.on('sayMyName',(name)=>{
    console.log(`Your Name is ${name[1]}`)
})
event.on('sayMyName',(name)=>{
    console.log(`Your Name is ${name[2]}`)
})
event.emit('sayMyName',['Rishbah','Jain','Salesforce'])