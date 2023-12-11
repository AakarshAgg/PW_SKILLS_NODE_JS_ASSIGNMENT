const events = require("events")
let eventEmitter= new events.EventEmitter()


function welcome(param){
    console.log(`Thank you for Subscribing ${param}`)
}

eventEmitter.on("subscribe",welcome)

eventEmitter.emit("subscribe","College Wallah")