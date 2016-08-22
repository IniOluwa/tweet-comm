require('dotenv').config();

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

var Twit = require('twit')
var twi = new Twit({
  consumer_key: process.env.consumer_key,
  consumer_secret: process.env.consumer_secret,
  access_token: process.env.access_token,
  access_token_secret: process.env.access_token_secret,
  timeout_ms: 60*1000,
});

rl.question('Input 1 to search, 2 to post and 3 to get followers: ', (answer) => {
    var twitter = new tweetComm();
    if(answer == 1){
        twitter.searchTwitter()
    }else if(answer == 2){
        twitter.postTweet()
    }else if(answer == 3){
        twitter.getFollowers()
    }
});

class tweetComm {
    constructor(){

    }

    searchTwitter(){
        rl.question('Search twitter for?: ', (answer) => {
            twi.get('search/tweets', { q: answer, count: 100 }, function(err, data, response) {
                console.log(data)
                })
            rl.close();
        });
    }


    postTweet(){

        rl.question('Have a tweet in mind?: ', (answer) => {
            twi.post('statuses/update', { status: answer }, function(err, data, response) {
                console.log(data)
                });
            rl.close();
        });
    }


    getFollowers(){
        rl.question('Input a twitter handle to get the followers of the respective user: ', (answer) => {
            twi.get('followers/id', { screen_name: answer }, function(err, data, response) {
                console.log(data)
                });
            rl.close();
        });
    }
};
