var express = require('express');
var router = express.Router();
var userServices = require('../services/userServices');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.post('/register', function(req, res, next) {
  var response = userServices.registerUser(req.body, req, res, next);
  res.send('Registro');
})
module.exports = router;
