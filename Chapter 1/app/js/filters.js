'use strict';

tempApp.filter('plusFifteen', [ function() {
    return function(arrTemp) {
        var arrReturn = new Array();
        angular.forEach(arrTemp, function(value, key){
            if(value.temp>=15) arrReturn.push(value);
        });
        return arrReturn;
    }
}]);

tempApp.filter('minimum', [ function() {
    return function(arrTemp, minimum) {
        var arrReturn = new Array();
        var min = minimum ? minimum : 15;
        angular.forEach(arrTemp, function(value, key){
            if(value.temp>=min) arrReturn.push(value);
        });
        return arrReturn;
    }
}]);