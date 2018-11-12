var http = require('http')
var fs = require('fs')
 //import fs from "fs"

//var myWriteStream = fs.createWriteStream(__dirname + "/writeme.txt")

//myReadStream.pipe(myWriteStream)

var server = http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type': 'application/json'});
    var myObj = {
        name: 'Rye',
        job: 'Samurai',
        age: 20

    }

    res.end(JSON.stringify(myObj))
})

server.listen(3000,'127.0.0.1')

console.log('server runs')