var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req, res) {

    if (req.url == "/") {

        let data = fs.readFileSync('home.html', 'utf-8');
        res.end(data);

    } else if (req.url == "/Contact") {

        let data = fs.readFileSync('contact.html', 'utf-8');
        res.end(data);

    } else if (req.url == "/About") {

        let data = fs.readFileSync('about.html', 'utf-8');
        res.end(data);

    } else if (req.url == "/Address") {
        let data = fs.readFileSync('address.html', 'utf-8');
        res.end(data);
    }

});

server.listen(5050);

console.log("Server runs successfully");