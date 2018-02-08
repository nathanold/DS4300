(function () {
    angular
        .module('DS4300')
        .factory('twitterService', twitterService);

    function twitterService($http) {
        var api = {
            postTweet: postTweet,
            addFollower: addFollower,
            getTimeline: getTimeline,
            getFollowers: getFollowers,
            getFollowees: getFollowees,
            getTweets: getTweets
        };
        return api;

        function postTweet(tweet) {
            // adds tweet to redis db, returns an ok message
            var url = '/api/tweet/' + tweet.id;
            return $http.post(url, tweet)
                .then(function (response) {
                    return response.data;
                });
        }

        function addFollower(followerId, followeeId) {
            var url = '/api/followers/add/' + followerId + '/' + followeeId;
            return $http.put(url)
                .then(function (response) {
                    return response.data;
                });
        }

        function getTimeline(userId) {
            var url = '/api/timeline/' + userId;
            return $http.get(url)
                .then(function (response) {
                    return response.data;
                });
        }

        function getFollowers(userId) {
            var url = '/api/followers/' + userId;
            return $http.get(url)
                .then(function (response) {
                    return response.data;
                });
        }

        function getFollowees(userId) {
            var url = '/api/followees/' + userId;
            return $http.get(url)
                .then(function (response) {
                    return response.data;
                });
        }

        function getTweets(userId) {
            var url = '/api/tweet/' + userId;
            return $http.get(url)
                .then(function (response) {
                    return response.data;
                });
        }

    }
})();