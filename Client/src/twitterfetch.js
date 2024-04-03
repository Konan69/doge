var Twitter = require('twitter');
require('dotenv/config');

const apiKey = process.env.apiKey
const apiKeySecret = process.env.apiKeySecret
const accessToken = process.env.accessToken
const accessTokenSecret = process.env.accessTokenSecret

var client = new Twitter({
  consumer_key: apiKey,
  consumer_secret: apiKeySecret,
  access_token_key: accessToken,
  access_token_secret: accessTokenSecret
});

var params = {screen_name: 'nodejs'};
client.get('statuses/user_timeline', params, function(error, tweets, response) {
  if (!error) {
    console.log(tweets);
  }
});