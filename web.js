var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
//var buf = fs.readFileSync("index.html");

//response.send(buf);

  response.send('Hello World 3!');
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
