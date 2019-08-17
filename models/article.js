var mongoose = require('../common/db');

var article = new mongoose.Schema({
    articleTitle:String,
    articleContext:String,
    articleTime:String
})
//通过id查找
article.statics.findByArticleId = function(id,callBack){
    this.find({_id:id},callBack);
};
article.statics.findAll = function(callBack){
    this.find({},callBack);
};

var articleModel= mongoose.model('article',article);
module.exports = articleModel;