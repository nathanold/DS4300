(function () {
    angular
        .module('DS4300')
        .config(configuration);

    function configuration($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/twitter/templates/twitter.view.client.html',
                controller: 'twitterController',
                controllerAs: 'model'
            })
    }

})();