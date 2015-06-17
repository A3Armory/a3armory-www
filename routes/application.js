var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('home', { title: 'Main', url: '' });
});

router.get('/donate', function(req, res, next) {
  res.render('donate', { title: 'Donate', url: '/donate' });
});

router.get('/scoreboard', function(req, res, next) {
  res.render('home', { title: 'Scoreboard', url: '/scoreboard' });
});

router.get('/leaderboard', function(req, res, next) {
  res.render('home', { title: 'Leaderboard', url: '/leaderboard' });
});

router.get('/contribute', function(req, res, next) {
  res.render('home', { title: 'Contribute', url: '/Contribute' });
});

module.exports = router;
