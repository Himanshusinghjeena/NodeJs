const http = require('http');

// if i do any changes in this server the result would not reflect we have to restart the server manually 
const server = http.createServer((req,res)=>{
    if(req.url === '/'){
        res.setHeader('content-Type',"text/html")
        res.write("<h1> I am Himanshu Singh Jeena aka HSJ Pahadi himanshu hgsfhkfahk hhhh </h1>");
        res.end()
    }
    // Source Code
    if(req.url === '/source-code'){
        res.write("It is the source code page for source cod ewrite by yourself");
        res.end()
    }
    // Contact Page
    if(req.url === '/contact'){
        res.setHeader('content-Type',"text/plain")
        res.write("DO you want to work with me or Collabrate with me");
        res.end()
    }
});
// server is also a event emmitter 


const PORT=3000;;
server.listen(PORT,()=>{
    console.log(`Listening on Port ${PORT}`)
})