var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req, res) {

    if (req.url == "/") {

        /*
        //ASynchronous
        fs.rename('demo.txt', 'demo_new.txt', function(error) {

            if (error) {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.write("File rename fail");
                res.end();
            } else {

                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.write("file rename success");
                res.end();
            }

        });

        */

        //Synchronous
        let error = fs.renameSync('demo.txt', 'demo_new.txt');

        if (error) {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write("File rename fail");
            res.end();
        } else {

            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write("file rename success");
            res.end();
        }

    }


});

server.listen(5050);

console.log("Server runs successfully");