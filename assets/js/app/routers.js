App.config(function($routeProvider, $locationProvider) {
    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });
    $routeProvider.when('/', {
        templateUrl : VIEWS_PATH + '/content.html',
        contoller: 'AppController',
        meta: {
            title: 'Kullanıcılar'
        }
    }).when('/index.html', {
        templateUrl : VIEWS_PATH + '/content.html',
        contoller: 'AppController',
        meta: {
            title: 'Kullanıcılar'
        }
    }).otherwise({
        redirectTo: '/'
    });
});
