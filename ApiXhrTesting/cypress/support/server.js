const http = require('http');
const fs = require('fs');

const port = process.env.PORT || 4200;

http.createServer((req,res)=>{
    res.end(
        fs.readFileSync('../fixtures/db.json')
    )
}).listen(port);