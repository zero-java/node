/**
 * Created by Administrator on 2016/12/5.
 */

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/test', function(req, res, next) {
    res.render('data/data', { users:[
        {name:'小红',age:18},
        {name:'小红',age:18},
        {name:'小红',age:18},
        {name:'小红',age:18},
    ] });
});

module.exports = router;
