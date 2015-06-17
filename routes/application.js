var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('home', { title: 'Main', url: '' });
});

router.get('/donate', function(req, res, next) {
  res.render('donate', { title: 'Donate', url: '/donate' });
});

router.get('/scoreboard', function(req, res, next) {
  res.render('scoreboard', { title: 'Scoreboard', url: '/scoreboard' });
});

router.get('/stats', function(req, res, next) {
  res.render('leaderboard', { title: 'Stats', url: '/stats', stats: true });
});

router.get('/contribute', function(req, res, next) {
  res.render('contribute', { title: 'Contribute', url: '/Contribute' });
});

router.use(function(req, res, next) {
  res.render('not_found', { title: '404', url: '/not_found' });
});

module.exports = router;
