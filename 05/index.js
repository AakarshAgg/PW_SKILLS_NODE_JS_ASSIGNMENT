const fs=require("fs");

fs.unlink("nodejs_architecture.txt",(err)=>{
    if(err){
        console.log("Error in deleting file",err)
    }else{
        console.log("File deleted Successfully")
    }
})