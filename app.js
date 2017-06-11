var express     = require('express');

var app         = express();
var PORT        = process.env.PORT || 5000;
var bookRouter  = require('./src/routes/bookRoutes');



app.use(express.static('public'));
app.set('views', './src/views');

app.set('view engine', 'ejs');

app.use('/Books', bookRouter);



app.get('/', function (req, res) {
  res.render('index', {
          title: 'Hello from renderer',
          nav: [{
            Link: '/Books',
            Text: 'Books'
          }, {
            Links: '/Authors',
            Text: 'Authors'
          }]});
});


app.listen(PORT, function(err) {
  console.log('Running server on port: ' + PORT);
});