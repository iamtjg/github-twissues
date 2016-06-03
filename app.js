'use strict';

var Twit = require('twit');
var GitHubApi = require('github');

// load twitter config
var T = new Twit({
  consumer_key:         process.env.CONSUMERKEY,
  consumer_secret:      process.env.CONSUMERSECRET,
  access_token:         process.env.ACCESSTOKEN,
  access_token_secret:  process.env.ACCESSTOKENSECRET
});

// load github config
var github = new GitHubApi({
  protocol: 'https',
  host: 'api.github.com'
});

// authenticate to github
github.authenticate({
  type: 'oauth',
  token: process.env.GITHUBTOKEN
});

// begin watching for issue hashtag
var stream = T.stream('statuses/filter', { track: '#' + process.env.TRACKERTAG });

stream.on('tweet', function (tweet) {
  if (!tweet.retweeted_status) { // only create issues for original tweets
    github.issues.create({
      user: process.env.GITHUBUSER,
      repo: process.env.GITHUBREPO,
      title: 'Twissue from ' + tweet.user.name + '(' + tweet.user.screen_name +')',
      body: tweet.text
    }, function(err, res) {
      var issueUrl = res.html_url;
      T.post('statuses/update', { status: '@'+ tweet.user.screen_name + ' issue filed ' + issueUrl }, function(err, data, response) {
        if (err) {
          console.log(err);
        }
      });
    });
  }

});
