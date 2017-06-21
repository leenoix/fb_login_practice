var express = require('express');
var http = require('http');

var app = express();

app.use('/script', express.static(__dirname + "/script/"));
app.use(express.static('public'));

http.createServer(app).listen(17322, function(){
    console.log("Http server listening on port " + 17322);
});

app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
});

app.get('/address', function(req, res){
    res.sendFile(__dirname + '/address.html');
});

