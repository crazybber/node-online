/**
 * Created by Administrator on 2015/12/13.
 */
var express = require('express');
var router = express.Router();
var product = require('../db/product');


router.get('/', function (req, res) {

    product.find(function (err, prodcts) {
       // res.send('../public/index.html');
        res.send(prodcts);
    });
});

module.exports = router;
