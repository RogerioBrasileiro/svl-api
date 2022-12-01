// var mongoose = require('mongoose');
// mongoose.connect('mongodb+srv://rsob_2109:<password>@svl-db.atpkc5p.mongodb.net/svl');

// exports.test = function(req, res) {
//   var db = mongoose.connection;
//   db.on('error', console.error.bind(console, 'connection error:'));
//   console.log("h1");
//   db.once('open', function callback () {
//     console.log("h");
//   });
//   res.render('test');
// };

const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://rsob_2109:rsob2109@svl-db.atpkc5p.mongodb.net/svl');

let db = mongoose.connection;

module.exports = db