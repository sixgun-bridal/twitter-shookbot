const twitter = require('twitter');
const _ = require('lodash')
const params = {screen_name: 'nodejs'};
const auth = require('./db/auth')

const isTweet = _.conforms({
  contributors: _.isObject,
  id_str: _.isString,
  text: _.isString,
})




client.get('statuses/user_timeline', params, function(error, tweets, response) {
  if (!error) {
    console.log(tweets);
  }
});

// client.get(path, params, callback);
// client.post(path, params, callback);
// client.stream(path, params, callback);

// SEARCH for tweets about 'bets'
client.get('search/tweets', {q: '#bets'}, function(error, tweets, response) {
   console.log(tweets);
});

// STREAM all tweets about 'bets' (search and stream very similar but search has more powerful queries and wider range of data whereas streams return a much higher flow of tweets)
// client.stream('statuses/filter', {track: 'bets'}, function(stream) {
//   stream.on('data', function(event) {
//     console.log(event && event.text);
//   });
//
//   stream.on('error', function(error) {
//     throw error;
//   });
// });

// TWEET a new status
client.post('statuses/update', {status: 'I love holding people accountable for past bets'},  function(error, tweet, response) {
  if(error) throw error;
  console.log(tweet);  // Tweet body.
  console.log(response);  // Raw response object.
});
