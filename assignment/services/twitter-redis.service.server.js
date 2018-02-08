var app = require('../../express');
var redis = require("redis");

if(!process.env.REDIS_URL) {
    var client = redis.createClient();
}else{
    var client = redis.createClient(process.env.REDIS_URL);
}

app.post('/api/tweet/:tweetId', postTweet);
app.put('/api/followers/add/:followerId/:followeeId', addFollower);
app.get('/api/timeline/:userId', getTimeline);
app.get('/api/followers/:userId', getFollowers);
app.get('/api/followees/:userId', getFollowees);
app.get('/api/tweet/:userId', getTweets);

function postTweet(req,res){
    var tweet = req.body;
    console.log('posting tweet: ');
    console.log(tweet);
}

function addFollower(req, res) {
    var followerId = req.params['followerId'];
    var followeeId = req.params['followeeId'];
    console.log(followerId+'is now followed by '+followeeId);
}

function getTimeline(req,res){
    var userId = req.params['userId'];
    console.log('send timeline for '+userId);
}

function getFollowers(req,res){
    var userId = req.params['userId'];
    console.log('send followers for '+userId);
}

function getFollowees(req,res){
    var userId = req.params['userId'];
    console.log('send followees for '+userId);
}

function getTweets(req,res){
    var userId = req.params['userId'];
    console.log('send tweets by '+userId);
}
