(function () {
    angular.module('DS4300')
        .controller('twitterController', twitterController);

    function twitterController($routeParams, $location, twitterService) {
        var model = this;
        var tweet;
        console.log('this is the right controller lol');
        model.postTweet = function(tweet){
            twitterService.postTweet(tweet);
        };
        model.addFollower = function(followerId, followeeId){
            twitterService.addFollower(followerId,followeeId);
        };
        model.getTimeline = function(userId){
            twitterService.getTimeline(userId);
        };
        model.getFollowers = function(userId){
            twitterService.getFollowers(userId);
        };
        model.getFollowees = function(userId){
            twitterService.getFollowees(userId);
        };
        model.getTweets = function(userId){
            twitterService.getTweets(userId);
        };
    }
})();
