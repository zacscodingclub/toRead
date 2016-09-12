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

module.exports = router;
