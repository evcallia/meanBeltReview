// bower init
// bower install --save angular
// bower install --save angular-route
var app = angular.module('app', ['ngRoute']);
app.config(function($routeProvider){
    $routeProvider
        .when('/login', {
            templateUrl: 'partials/login.html',
            controller: 'loginController'
        })
        .when('/dashboard', {
            templateUrl: 'partials/allTopics.html',
            controller: 'topicController'
        })
        .when('/topics/:id', {
            templateUrl: 'partials/showTopic.html',
            controller: 'topicController'
        })
        .when('/users/:id', {
            templateUrl: 'partials/showUser.html',
            controller: 'userController'
        })
        .otherwise({
            redirectTo:'/login'
        })
})
