const fs=require("fs");

fs.readFile("nodejs_architecture.txt",(err,data)=>{
    if(err){
        console.log("Error in writing file:",err)
    }else{
        console.log(data.toString())
    }
})