var http = require('http');

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

var Twit = require('twit')
var twi = new Twit({
  consumer_key: 'LgV6Ab9aUInVfvIYbYGMzwjzu',
  consumer_secret: 'hBNcbCDZBkbGrdTa7Pt7RLzWiGY3WkIRkrbNiIn57eqyMiTZB2',
  access_token: '750109182-cRb1uMRsbf9fewPUjsaRLIiBYC72bFO19gUisMKh',
  access_token_secret: 'Jl8qAV5OMFUndrEprcNA8k7W8yrUxhjxYKFSWVEmWJ3IA',
  timeout_ms: 60*1000,
});

class tweetComm {
    constructor(){

    };

    searchTwitter(){

        rl.question('Search twitter for?', (answer) => {

            twi.get('search/tweets', { q: answer, count: 100 }, function(err, data, response) {
                console.log(data)
                })
            rl.close();
        });
    }

    postTweet(){

        rl.question('Have a tweet in mind?', (answer) => {
            twi.post('statuses/update', { status: answer }, function(err, data, response) {
                console.log(data)
                });
            rl.close();
        });

    }

    getFollowers(){
        rl.question('Have a tweet in mind?', (answer) => {
            twi.get('followers/id', { screen_name: answer }, function(err, data, response) {
                console.log(data)
                });
            rl.close();
        });
    }
};