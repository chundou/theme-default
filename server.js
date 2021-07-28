var http = require('http')
var nStatic = require('node-static')
var staticServer = new nStatic.Server('./public/')

http.createServer(function (req, res) {
  console.log({
    _datetime: new Date(),
    url: req.url,
    statusCode: res.statusCode,
    method: req.method,
    // headers: req.headers
  })
  staticServer.serve(req, res)
}).listen(9981)
