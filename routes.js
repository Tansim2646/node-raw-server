const fs = require('fs');
// Route Handler
const requestHandler = (req,res)=>{
    if(req.url === "/"){
    console.log('Hello We got a request');
    res.setHeader('Content-Type','text/html');
    res.write('<html>');
    res.write('<head><title>First Node JS Server Response</title></head>');
    res.write('<body><form action="/message" method="POST"><input type="text" name="message"/><button type="submit">Submit The Message</button></form></body');
    res.write('</html>');
    return res.end();
    }
    if(req.url === "/message" && req.method === "POST"){
        const body = [];
        req.on('data',(chunk)=>{
            body.push(chunk);
        });
        return req.on('end',()=>{
            const parsedBody = Buffer.concat(body).toString();
            const text = parsedBody.split("=")[1];
            fs.writeFileSync('newFile.txt',text);
            console.log("Written file successfully");
            res.statusCode = 302;
            res.setHeader('Location','/');
            return res.end();
        });
    }
    res.setHeader('Content-Type','text/html');
    res.write('<html>');
    res.write('<head><title>First Node JS Server Response</title></head>');
    res.write('<body><h1>Welcome to the node js server created by Tansim Anjum Anim</h1></body');
    res.write('</html>');
    res.end();
}
module.exports = requestHandler;