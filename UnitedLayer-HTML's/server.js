var express = require('express');
var server = express();

server.use(express.static(__dirname));

server.listen(8000);

console.log('server is running 8000');