var express = require('express');
var http = require('http');

var app = express();

http.createServer(app).listen(17322, function(){
    console.log("Http server listening on port " + 17322);
});

app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
});
