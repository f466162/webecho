var express = require('express');
var moment = require('moment')
var os = require('os');
var router = express.Router();

router.all('/*', function(req, res, next) {
    res.render('index',
        {
            title: 'webecho',
            hostname: os.hostname(),
            date: moment().format(),
            method: req.method,
            url: req.url,
            headers: req.headers,
            body: req.body.content
        });
});

module.exports = router;
