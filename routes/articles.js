var express = require('express');
var router = express.Router();
var Article = require('../models/article');

/* GET articles listing. */
router.get('/', function(req, res, next) {
  Article.getArticles(function(err, articles){
    if(err) { console.log(err); }

    res.json(articles);
  });
});

router.get('/:id', function(req, res, next) {
  Article.getArticleById(req.params.id, function(err, article){
    if(err) { console.log(err); }

    res.json(article);
  });
});

router.get('/category/:categoryName', function(req, res, next) {
  Article.getCategoryArticles(req.params.categoryName , function(err, articles) {
    if(err) { console.log(err); }

    res.json(articles);
  })
})

router.post('/', function(req, res, next) {
  var newArticle = new Article({
    title: req.body.title,
    category: req.body.category,
    body: req.body.body,
    url: req.body.url
  });

  Article.createArticle(newArticle, function(err, article) {
    if(err) { console.log(err); }

    res.location('/articles');
    res.redirect('/articles');
  });
});

router.put('/', function(req, res, next) {
  var data = {
    id: req.body.id,
    title: req.body.title,
    category: req.body.category,
    body: req.body.body,
    url: req.body.url
  }

  Article.updateArticle(data.id, data, function(err, article) {
    if(err) { console.log(err); }

    res.location('/articles');
    res.redirect('/articles');
  });
});

router.delete('/:id', function(req, res, next) {
  var id = req.params.id;

  Article.removeArticle(id, function(err, article) {
    if(err) { console.log(err); }

    res.location('/articles');
    res.redirect('/articles');
  });
})

module.exports = router;
