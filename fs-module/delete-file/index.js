var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req, res) {

    if (req.url == "/") {

        /*
        //ASynchronous
        fs.unlink('demo.txt', function(error) {

            if (error) {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.write("File delete fail");
                res.end();
            } else {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.write("file delete success");
                res.end();
            }

        });

        */


        //Synchronous
        let error = fs.unlinkSync('demo.txt');

        if (error) {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write("File delete fail");
            res.end();
        } else {

            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write("file delete success");
            res.end();
        }



    }


});

server.listen(5050);

console.log("Server runs successfully");