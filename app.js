var http = require('http')
var fs = require('fs')
 //import fs from "fs"

//var myWriteStream = fs.createWriteStream(__dirname + "/writeme.txt")

//myReadStream.pipe(myWriteStream)

var server = http.createServer(function(req,res){

    console.log('request was made from  '+ req.url)
    res.writeHead(200,{'Content-Type': 'text/html'})
    var myReadStream =fs.createReadStream(__dirname + '/index.html','utf8')
    myReadStream.pipe(res)
});


server.listen(3000,'127.0.0.1')

console.log('server runs')