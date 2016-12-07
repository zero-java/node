var express = require('express');
var router = express.Router();
var cache = require("../bin/cache/Cache.js");
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('layout', cache);
});

module.exports = router;
