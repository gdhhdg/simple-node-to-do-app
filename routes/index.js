var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const todo = require('../schemas/todo.model');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
});

module.exports = router;
