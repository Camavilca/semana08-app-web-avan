var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
    res.render('');
});
router.post('/', function (req, res, next) {
    res.render('');
});
router.get('/show/:id', function (req, res, next) {
    res.render('');
});
router.post('/update', function (req, res, next) {
    res.render('');
});
router.get('/delete:id', function (req, res, next) {
    res.render('');
});

module.exports = router;
