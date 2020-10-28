// use the http module
var http = require('http'),
// find port used by heroku and assign to variable
port = process.env.PORT || process.argv[2] || 8080;
//create the server
var server = http.createServer(function (req, res)
    {
        //write hello world to web page
        res.writeHead(200, {
            'Content-Type': 'text/html'
        });
        res.write('<h1 style="color: red;">Hello World!!!!!!!!! - Oisin</h1>', 'utf-8');
        //close
        res.end();
 
    });
//set server to listen on heroku port found through env
server.listen(port)