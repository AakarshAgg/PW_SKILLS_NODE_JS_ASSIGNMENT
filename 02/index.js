const fs=require("fs");


fs.writeFile("nodejs_architecture.txt","Node.js architecture consists of several components that work together to handle incomming client requests and process response.These components are:1. request:Node.js receives two types of requests,incomming and outgoing. Incoming requests can be either complex (blocking) or simple (non-blocking), depending on the task that needs to be performed by the web application or software.2. Node.js Server: It is a Server-side platform that received client requests, processes them, and sends thecorresponding responses back to the clients.3. Event Queue: Incoming client requests are stored in the event queue and then passed on to the event loopone by one.4. Event Loop: It is an indefinite loop where requests are received, processed, and responses are returned to theclients. The event loop is a critical component of Node.js arch7tecture, as it allows for non-blocking I/Ooperations.5. Thread Pool: Node.js has a pool of threads available for carrying out tasks required to fulfill client requests.This ensures that multiple requests can be processed simultaneously, improving the performance of Node.jsapplications." ,(err)=>{
    if(err){
        console.log("Error in writing file:",err)
    }else{
        console.log("Data added successfully in the file.")
    }
})