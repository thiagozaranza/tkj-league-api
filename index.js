var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.get('/api/teams', function (req, res) {
  res
    .set('Access-Control-Allow-Origin', '*')
    .send({
      list: [
        {id: 1, name: "Thiago"},
        {id: 2, name: "Zaranza"},
        {id: 3, name: "Sousa"},
      ]
    });
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});