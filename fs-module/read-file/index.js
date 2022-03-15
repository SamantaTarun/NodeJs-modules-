var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req, res) {

    if (req.url == "/") {

        /*
          //ASynchronous
          fs.readFile('Home.html', function(error, data) {
              res.writeHead(200, { 'Content-Type': 'text/html' });
              res.write(data);
              res.end();


          });
        */
        //Synchronous
        let mydata = fs.readFileSync('Home.html');
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(mydata);
        res.end();
    }


});

server.listen(5050);

console.log("Server runs successfully");