myApp.controller('AnalyticsController', ['$scope','$http', function($scope,$http) {

    $scope.init = function(){

        console.log("Init started Anatlitics");
        $scope.appConfig="http://localhost:3000";
        $scope.all;
        $scope.getAll();

    };
    
    
    $scope.getAll = function () {
    
    
        $http.post($scope.appConfig+'/cc').success(
                function(data){
                    console.log(data)
                    $scope.all=data
                }
            ).error(
                function(error){
                  console.log(error)
                }
            );
        
    }
    
    $scope.init();


}]);