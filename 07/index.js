const http=require("http")

let PORT=5000;

let server= http.createServer((req,res)=>{
    if(req.url=="/"){
        res.setHeader("Content-Type", "text/html")
        res.write("<h1>I Am Happy To Learn Full Stack Web Development From PW SKills.</h1>  ")
        res.end()
    }
})



server.listen(PORT,(err)=>{
    if(err){
        console.log("Error in running server",err)
    }else{
        console.log(`Server is running at port ${PORT}`)
    }
})