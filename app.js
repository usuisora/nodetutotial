var http = require('http')
var fs = require('fs')
 //import fs from "fs"

//var myWriteStream = fs.createWriteStream(__dirname + "/writeme.txt")

//myReadStream.pipe(myWriteStream)

var server = http.createServer(function(req,res){
 

    if(req.url =='/home' || req.url =='/'){
        res.writeHead(200, {'Content-Type': 'text/html'})
        fs.createReadStream(__dirname + '/index.html').pipe(res)

    }
    else if (req.url ==='/contact'){
        res.writeHead(200, {'Content-Type': 'text/html'})
        fs.createReadStream(__dirname + '/contact.html').pipe(res)
    }
   else if(req.url ==='/api/ninjas'){
       res.writeHead(200, {'Contact-Type': 'application/json'})
       var myObjs= [
           {name: 'Johny' , age : 23},
            {name : 'Callu', age: 25}
    ]
       res.end(JSON.stringify(myObjs))
   }else{
    res.writeHead(404, {'Content-Type': 'text/html'})
    fs.createReadStream(__dirname + '/404.html').pipe(res)
   }
})

server.listen(3000,'127.0.0.1')

console.log('server runs')