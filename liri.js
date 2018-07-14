require("dotenv").config();

///importing my keys
var twitterKeysFile = require("./keys.js");

/// to call upon the installed twit npm
var Twit = require('twit');

///Passes Twitter keys into call to Twitter API.
var T = new Twit(twitterKeysFile.twitterKeys);

//running function to get my tweets
getMyTweets()

function getMyTweets() {

var params = { 
  /// q = query time, what you're searching for or who
  q: 'nickA90029765', 
  /// number of tweets to report back 
  count: 10
};
  
/// used to search for tweets
  T.get('search/tweets', params, gotData);

  /// call back function
  function gotData(err, data, response) {
    var tweets = data.statuses;
    for (var i = 0; i < tweets.length; i++) {
      console.log(tweets[i].text);
    }
  }
  
};

///running function to post tweets
makeTweet();

function makeTweet() {
    var tweet = {
      ///What's being posted to Twitter
    status: '#CodingRUs1'
}

    T.post('statuses/update', tweet, tweeted);

    ///callback function
    function tweeted(err, data, response) {
      if (err) {
      console.log("Oops something went wrong!")
  } else {
  console.log("It worked!");
}

    }
}

