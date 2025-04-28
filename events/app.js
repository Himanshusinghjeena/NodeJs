const EventEmmiter = require('events');

const emitter = new EventEmmiter();


// emitter.on('greet',(name,age)=>{
//     console.log(`Hello My name is ${name} and my age is ${age}`)
// })

// emitter.emit('greet','gaurav',20);


emitter.on('greet',(obj)=>{
    console.log(`My name is ${obj.name} and I am a ${obj.role}`);
})
emitter.emit('greet',{name:'himanshu jeena',role:'Developer'})