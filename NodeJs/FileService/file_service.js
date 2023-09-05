// Node.js File System Module

var fs = require('fs');
var http = require('http')
var url = require('url')

var last_name = ""

http.createServer(
    (req,res) => {
        res.writeHead(200,{'Content-Type':'text/html'});
        let path_url = req.url
        if(path_url == '/'){
            fs.readFile('./Sample.html',(err,data)=>{
                if(!err){
                    res.write(data)
                }else{
                    res.write(`Error : ${err}`)
                }
                res.end()
            })
        }else if(path_url.includes('/write')){
            var q = url.parse(path_url,true).query
            last_name = q.filename
            fs.appendFile('Files_data.txt',q.filename+'.txt'+'\n',(err)=>{
                console.log(err)
            })
            fs.appendFile(q.filename+'.txt',q.content+'\n',(err)=>{
                res.write(`Error : ${err}`)
                res.end()
            })
            res.write(`The "${q.content}"Content are Added in the File<br><button><a href='/'>return to home</a></button>`)
            res.end()
        }else if(path_url.includes('/read')){
            var q = url.parse(path_url,true).query
            fs.readFile('Files_data.txt',(err,data)=>{
                if(!err){
                    var arr = data.toString().split(/\n/g)
                    var latest_name = arr[arr.length - 2]
                    fs.readFile(latest_name,(err,data)=>{
                        if(!err){
                            res.write(`The content is :\n\n\n <pre>${data.toString().replace(/\n/g,'<br>')} </pre><br><br> <button><a href='/'>return to home<a></button>`)
                            res.end()
                        }else{
                            res.write(`Error : ${err}`)
                            res.end()
                        }
                    })
                }else{
                    res.write(`Error : ${err}`)
                    res.end()
                }
            })
        }else if(req.url.includes('/delete')){
            var q = url.parse(req.url, true).query
            fs.unlink(q.filename+'.txt',(err)=>{
                if (err){
                    res.write("Something went worng...! <br> <br><button><a href='/'>Return to Home</a></button>")
                    res.end()
                }else{
                    res.write(`The ${q.filename+'.txt'} File was Deleted..! <br> <br><button><a href='/'>Return to Home</a></button>`)
                    res.end()
                }
            })
        }else if(req.url.includes('/list')){
            fs.readFile('Files_data.txt',(err,data)=>{
                if(!err){
                    res.write(`<pre>${data.toString().replace(/\n/g,'<br>')}</pre>`)
                    res.end()
                }else{
                    res.write(`Error : ${err}`)
                    res.end()
                }
            })
        }
        else{
            res.write('else part')
            res.end()
        }
    }
).listen(8080)
