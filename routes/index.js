/**
 * Created by Administrator on 2015/12/13.
 */
var express = require('express');
var router = express.Router();
var Product = require('../db/Product');


router.get('/', function (req, res) {

    Product.find(function (err, prodcts) {
       // res.send('../public/index.html');
        res.send(prodcts);
    });
});

module.exports = router;
