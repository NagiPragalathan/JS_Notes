var http = require('http')
var url = require('url')
var fs = require('fs')

http.createServer((req,res)=>{
    let url_path = req.url
    let q  = url.parse(url_path,true)
    let filename = '.'+q.path
    fs.readFile(filename,(err,data)=>{
        if(!err){
            res.writeHead(200,{'Content-Type':'text/html'})
            res.write(data.toString())
        }else{
            res.writeHead(404,{'Content-Type':'text/html'})
            res.write(`404 - File Not Found, You can any other keys in the url path - ${filename}`)
        }
        return res.end()
    })
}).listen(8080)