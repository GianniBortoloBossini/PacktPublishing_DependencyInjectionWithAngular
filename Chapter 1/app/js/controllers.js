'use strict';

tempApp.controller('CurrentCtrl', ['$scope',
    function($scope) {
        $scope.temp = 17;
}]);

tempApp.controller('ChartCtrl', ['$scope','$log',
    function($scope,$log) {
    
    $scope.tempMin = 15; 
    
    $scope.xkey = 'date';
    
    $scope.ykeys = ['temp'];
    
    $scope.labels = ['Temperature'];
    
    $scope.historyData = [
        { date: '2013-01-01', temp: 8},
        { date: '2013-02-01', temp: 13},
        { date: '2013-03-01', temp: 15},
        { date: '2013-04-01', temp: 11},
        { date: '2013-05-01', temp: 15},
        { date: '2013-06-01', temp: 17},
        { date: '2013-07-01', temp: 21}
    ];
}]);

tempApp.controller('HistoryCtrl', ['$scope',
    function($scope) {
        $scope.tempMin = 15;  
        
        $scope.historyData = [
        { date: '2013-01-01', temp: 8},
        { date: '2013-02-01', temp: 13},
        { date: '2013-03-01',temp: 15},
        { date: '2013-04-01', temp: 11},
        { date: '2013-05-01',temp: 15},
        { date: '2013-06-01',temp: 17},
        { date: '2013-07-01',temp: 21}
    ]
}]);