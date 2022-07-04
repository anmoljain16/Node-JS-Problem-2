var http = require('http');
var fs = require('fs');


http.createServer(function (req, res) {

    fs.readFile('vegetable.json', function(err, data) {
    //   res.writeHead(200, {'Content-Type': 'json'});
      res.write(data);
      return res.end();
    });
  }).listen(8080);