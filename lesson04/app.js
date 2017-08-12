var fs = require('fs')
var res = fs.readFile('text.txt','utf-8',function(err,data){
    if(err) throw err;
    console.log(data.toString().split('\n').length)
    });
