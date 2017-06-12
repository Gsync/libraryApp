var passport = require('passport');

module.export = function (app) {
  app.use(passport.initialize());
  app.use(passport.session());

  passport.seializeUser(function(user, done) {
    done(null, user);
  });

  passport.deseializeUser(function(user, done) {
    done(null, user);
  });

  require('./strategies/local.strategy')();

};

