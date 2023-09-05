var http = require('http')
var up = require('upper-case')

http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'text/html'})
    res.write(up.upperCase('hello world'))
    res.end()
}).listen(8080)