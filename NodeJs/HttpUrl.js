var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  if(req.url == "/hello"){
      res.write("Priyanka");
  }else if(req.url == "/hi"){
        res.write("Nagi")
  }
  res.end();
}).listen(8080);
