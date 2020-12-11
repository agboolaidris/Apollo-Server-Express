const events = require('events')
const myEmitter = new events.EventEmitter
myEmitter.on('Speak',(mssg)=>{
  console.log(mssg)
})
myEmitter.emit('Speak','i love coding')

