var mongoose = require('mongoose');
var url = 'mongodb://localhost/movieServer'
mongoose.connect(url,{useNewUrlParser:true});

module.exports = mongoose;