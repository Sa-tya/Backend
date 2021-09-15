var express = require('express');
var router = express.Router();
var initialCheck = require('../middleware/check')
var register = require('../controller/register')

/* GET home page. */
router.get('/', function(req, res, next) {
  const sess = req.session;
  sess.username = 'satya'
  res.render('index', { title: req.session.username });
});

router.post('/register',initialCheck,register)
module.exports = router;
