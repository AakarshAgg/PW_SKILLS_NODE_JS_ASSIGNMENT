const events = require("events")
let eventEmitter= new events.EventEmitter()


function welcome(param){
    console.log(`Thank you for Subscribing ${param}`)
}

eventEmitter.on("subscribe",welcome)

eventEmitter.emit("subscribe","College Wallah")

console.log("The default maximum number of event listener are :",eventEmitter.getMaxListeners())

eventEmitter.setMaxListeners(5)

console.log("The update maximum number of event listeners are :",eventEmitter.getMaxListeners())