var mongoose = require('mongoose');

var articleSchema = mongoose.Schema({
  title: {
    type: String,
    index: true,
    required: true
  },
  body: {
    type: String,
    required: true
  },
  category: {
    type: String,
    index: true,
    required: true
  },
  url: {
    type: String
  },
  date: {
    type: Date,
    default: Date.now
  }
});

var Article = module.exports = mongoose.model('Article', articleSchema);

module.exports.getArticles = function(callback) {
  Article.find(callback);
}

module.exports.getArticleById = function(id, callback) {
  Article.findById(id, callback);
}

module.exports.getCategoryArticles = function(category, callback) {
  var query = { category: category }
  Article.find(query, callback);
}

module.exports.createArticle = function(data, callback) {
  data.save(callback);
}

module.exports.updateArticle = function(id, data, callback) {
  var title = data.title;
  var body = data.body;
  var category = data.category;
  var url = data.url;

  var query = { _id: id };
  Article.findById(query, function(err, article) {
    if(!article) {
      return next(new Error('Could not load article.')) ;
    } else {
      article.title = title;
      article.body = body;
      article.category = category;
      article.url = url;

      article.save(callback);
    }
  });
}

module.exports.deleteArticle = function(id, callback) {
  var query = { _id: id };
  Article.find(query).remove(callback);
}
