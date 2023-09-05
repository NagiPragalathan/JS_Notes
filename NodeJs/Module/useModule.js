var dt = require("./Modulejs")
var http = require("http")

http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'text/html'})
    res.write(`${dt.myDateTime()}`)
    res.end()
}).listen(8080)
