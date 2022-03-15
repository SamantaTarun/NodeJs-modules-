const { write } = require('fs');
var http = require('http');
var URL = require('url');

var server = http.createServer(function(req, res) {

    var myURL = "https://stackoverflow.com/questions/44346105/uncaught-referenceerror-writehtml-is-not-defined";

    var myURLObj = URL.parse(myURL, true);

    var MyhostName = myURLObj.host;
    var MyPathName = myURLObj.pathname;
    var MySearchName = myURLObj.search;


    res.writeHead(200, { 'Content-Type': 'text/html' });

    res.end(MyPathName);

    //res.end();


});

server.listen(5050);

console.log("Server runs successfully");