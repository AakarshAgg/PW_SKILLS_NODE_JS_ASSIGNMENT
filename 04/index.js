const fs=require("fs");

fs.appendFile("nodejs_architecture.txt","Advantages-->Node.js offers high performance, scalability, and real-time capabilities for server-side applications. Its single-threaded, event-driven architecture optimizes resource utilization, enhancing speed and responsiveness. JavaScript usage across the entire stack simplifies development, promotes code reuse, and facilitates seamless communication between client and server.",(err)=>{
    if(err){
        console.log("Error in writing file:",err)
    }else{
        console.log("Success in appending")
    }
})

fs.readFile("nodejs_architecture.txt",(err,data)=>{
    if(err){
        console.log("Error in reading file",err)
    }else{
        console.log(data.toString())
    }
})