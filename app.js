var express = require('express');

var app = express();
var PORT = 5000;

app.use(express.static('public'));
app.set('views', './src/views');

app.set('view engine', 'ejs');

app.get('/', function (req, res) {
  res.render('index', {list: ['a', 'b']});
});

app.get('/books', function (req, res) {
  res.send('Hello books');
});

app.listen(PORT, function(err) {
  console.log('Running server on port: ' + PORT);
});