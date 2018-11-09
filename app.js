var fs = require('fs')


fs.unlink('./stuff/writeme.txt',function(){
    fs.rmdir('stuff')
})


//fs.readFile(read params)/Sync, writefile/Sync