var express = require('express');
var moment = require('moment')
var os = require('os');
var router = express.Router();

/* GET home page. */
router.get('/*', function(req, res, next) {
  res.render('index',
      {
        title: 'Web Echo',
        hostname: os.hostname(),
        date: moment().format(),
        method: req.method,
        url: req.url,
        headers: req.headers,
        body: req.body.content
      });
});

module.exports = router;
