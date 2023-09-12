const http = require('http');
const fs = require('fs');

const port = process.env.PORT || 4200;

http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'text/html'})
    res.end(
        fs.readFileSync('../fixtures/db.json')
    )
}).listen(port);