var express     = require('express');
var bodyParser  = require('body-parser');
var cookieParser= require('cookie-parser');
var passport    = require('passport');
var session    = require('express-session');

var app         = express();
var PORT        = process.env.PORT || 5000;
var nav         = [{
                    Link: '/Books',
                    Text: 'Books'
                  }, {
                    Link: '/Authors',
                    Text: 'Authors'
                  }];
var bookRouter    = require('./src/routes/bookRoutes')(nav);
var authorRouter  = require('./src/routes/authorRoutes')(nav);
var adminRouter  = require('./src/routes/adminRoutes')(nav);
var authRouter  = require('./src/routes/authRoutes')(nav);


app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cookieParser());
app.use(session({
  secret: 'library',
  resave: true,
  saveUninitialized: true
  }));
require('./src/config/passport.js')(app);

app.set('views', './src/views');

app.set('view engine', 'ejs');



app.use('/Books', bookRouter);
app.use('/authors', authorRouter);
app.use('/admin', adminRouter);
app.use('/auth', authRouter);



app.get('/', function (req, res) {
  res.render('index', {
          title: 'Hello from renderer',
          nav: [{
                    Link: '/Books',
                    Text: 'Books'
                  }, {
                    Link: '/Authors',
                    Text: 'Authors'
                  }]
        });
});


app.listen(PORT, function(err) {
  console.log('Running server on port: ' + PORT);
});