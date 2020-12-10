const events = require('events')
let util = require('util')



let Person = function(name){
  this.name = name
}
util.inherits(Person, events.EventEmitter)

let jame = new Person('jame')
let idris = new Person('idris')
let bayo = new Person('bayo')

people = [jame,idris,bayo]

people.forEach(person => {
    person.on('speak', (mssg)=>{
        console.log(`${person.name} said ${mssg}`)
    })
});
jame.emit('speak', 'Node')
idris.emit('speak', 'I am React master')