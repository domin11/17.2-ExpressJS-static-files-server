var bodyParser = require('body-parser');
var express = require('express');
var fs = require('fs');
var app = express();
var stringifyFile = "";

app.use(bodyParser.json());

app.get('/getNote', function (req, res) {
    fs.readFile('./test.json', 'utf8', function(err, data) {
      if (err) throw err;
      stringifyFile = data
      res.send(data);
    });
});

app.post('/updateNote/:note', function (req, res) {
    fs.writeFile('./test.json', stringifyFile + req.params.note, function(err) {
      if (err) throw err;
      console.log('file updated');
    });
});

app.listen(3000);
