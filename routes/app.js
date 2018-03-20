var mongoose = require('mongoose');
var express = require('express');
var router = express.Router();

// mongoose.connect('mongodb://heroku_q1rgmlhw:6i8hl61vlc9g6ikqjcijmgscpv@ds157614.mlab.com:57614/heroku_q1rgmlhw/node-angular');

// var db = mongoose.connection;


router.get('/', function (req, res, next) {
    res.render('index', {
        test: 'Hi I am a test!'
    });
});

module.exports = router;
