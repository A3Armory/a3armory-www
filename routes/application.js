var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('main', { title: 'Main', url: '/' });
});

router.get('/donate', function(req, res, next) {
  res.render('donate', { title: 'Donate', url: '/donate' });
});

router.get('/scoreboard', function(req, res, next) {
  res.render('scoreboard', { title: 'Scoreboard', url: '/scoreboard', scores: true });
});

router.get('/stats', function(req, res, next) {
  res.render('leaderboard', { title: 'Stats', url: '/stats', stats: true });
});

router.get('/contribute', function(req, res, next) {
  res.render('contribute', { title: 'Contribute', url: '/contribute' });
});

router.use(function(req, res, next) {
  res.render('errors/404', { title: '404', url: '' });
});

module.exports = router;
