var mongoose = require('../common/db');

var comment = new mongoose.Schema({
    movie_id:String,
    username: String,
    context: String,
    check:Boolean
})
comment.statics.findByMovieId = function(m_id,callBack){
    this.find({movie_id:m_id,check:true},callBack);
};
comment.statics.findAll = function(callBack){
    this.find({},callBack);
};
var commentModel = mongoose.model('comment',comment);

module.exports =commentModel