// const http = require("http");
// const fs = require("fs");
// const server = http.createServer((req,res)=>{
//     const url = req.url;
//     const method = req.method;
//     if(url === "/"){
//     res.setHeader('Content-Type','text/html');
//     res.write('<html>');
//     res.write('<head><title>Hello from node js</title></head>');
//     res.write('<body><form action="/message" method="POST"><input type="text" name="message"/><button type="submit">Submit</button></form></body>');
//     res.write('</html>');
//     return res.end();
//     }
//     if(url === "/message" && req.method === "POST"){
//         const body = [];
//         req.on('data',(chunk)=>{
//             body.push(chunk);
//         });
//         req.on('end',()=>{
//             const parsedBody = Buffer.concat(body).toString();
//             const message = parsedBody.split("=")[1];
//             fs.writeFileSync("newfile.txt",message);
//         });
//         res.statusCode = 302;
//         res.setHeader("Location","/");
//         return res.end();  
//     }
//     res.setHeader('Content-Type','text/html');
//     res.write('<html>');
//     res.write('<head><title>Hello from node js</title></head>');
//     res.write('<body><h1>Hello from the node js server</h1></body>');
//     res.write('</html>');
//     res.end();
// });
// server.listen(3000); 
const http = require('http');
const handler = require('./routes');
// creating server
const server = http.createServer(handler);
// /////////////////    LISTENNING TO THE PORT  /////////////////
server.listen(8080);

