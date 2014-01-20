'use strict';

var tempApp = angular.module('tempApp', []).
    config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/current', {templateUrl: 'partials/current.html', controller: 'CurrentCtrl'});
        $routeProvider.when('/history', {templateUrl: 'partials/history.html', controller: 'HistoryCtrl'});
        $routeProvider.when('/chart', {templateUrl: 'partials/chart.html', controller: 'ChartCtrl'});
        $routeProvider.otherwise({redirectTo: '/current'});
}]);