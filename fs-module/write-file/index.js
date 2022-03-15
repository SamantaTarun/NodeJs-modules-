var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req, res) {

    if (req.url == "/") {

        /*
        //ASynchronous
        fs.writeFile('demo.txt', "jidu2du2928d scsc dvdvsd ciew", function(error) {

            if (error) {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.write("File write fail");
                res.end();
            } else {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.write("file write success");
                res.end();
            }

        });
        */




        //Synchronous
        let error = fs.writeFileSync('demo.txt', "jdeiudjuivccvcewi  fffv ekek");

        if (error) {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write("File write fail");
            res.end();
        } else {

            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write("file write success");
            res.end();
        }


    }


});

server.listen(5050);

console.log("Server runs successfully");