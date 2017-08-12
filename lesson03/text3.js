var fs = require('fs')
var res = fs.readFileSync('text.txt','utf-8');
console.log(res.split('\n').length-1);