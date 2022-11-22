var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

exports.test = function(req, res) {
  var db = mongoose.connection;
  db.on('error', console.error.bind(console, 'connection error:'));
  console.log("h1");
  db.once('open', function callback () {
    console.log("h");
  });
  res.render('test');
};