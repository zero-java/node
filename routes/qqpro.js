/**
 * Created by Administrator on 2017/1/11.
 */
var express = require('express');
var router = express.Router();
var cache = require("../bin/cache/Cache.js");
/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('qqpro/index', cache);
});

router.get("/background",function(req,res,next){
    res.render('qqpro/background')
});

module.exports = router;
