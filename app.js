var http = require('http')
var fs = require('fs')

var myReadStream =fs.createReadStream(__dirname + '/readme.txt','utf8')


myReadStream.on("data", function(chunk){
    console.log("new chunk reCeived:");
    console.log(chunk)
})


/*
var server = http.createServer(function(req,res){

    console.log('rqeust was made from  '+ req.url)
    res.writeHead(200,{'Content-Type': 'text/plain'})
    res.end('sssl');
});


server.listen(3000,'127.0.0.1')

console.log('server runs')*/