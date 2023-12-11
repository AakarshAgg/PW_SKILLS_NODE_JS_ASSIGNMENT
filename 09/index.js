const events = require("events")
const eventEmitter = new events.EventEmitter()

const hello=()=>{
    console.log("Hello!World")
}


eventEmitter.on("greet",hello)

eventEmitter.emit("greet")

eventEmitter.removeListener("greet",hello)

eventEmitter.emit("greet")  //nothing happen 
