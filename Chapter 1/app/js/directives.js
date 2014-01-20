'use strict';

tempApp.directive('linechart', function() {
    return {
        restrict: 'E',
        template: '<div></div>',
        replace: true,
        link: function($scope, element, attrs) {
        
            var data = $scope[attrs.data],
                xkey = $scope[attrs.xkey],
                ykeys= $scope[attrs.ykeys],
                labels= $scope[attrs.labels];
            
            var  graph = Morris.Line ({
                    element: element,
                    data: data,
                    xkey: xkey,
                    ykeys: ykeys,
                    labels: labels
                }
            );
            
            $scope.$watch(function() {  
                var arrReturn = [];
                angular.forEach(data, function(value, key){
                    if(value.temp>=$scope.tempMin) arrReturn.push(value);
                });
                graph.setData(arrReturn);
            });
        }
    };
});