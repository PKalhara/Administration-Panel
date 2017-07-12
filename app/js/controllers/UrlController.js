myApp.controller('UrlController', ['$scope','$http','$location','toastr', function($scope,$http,$location,toastr) {

    $scope.init = function(){

        console.log("Init started URL");
        $scope.appConfig="http://localhost:3000";
        $scope.all;
       // $scope.getAll();
        $scope.email="p@gmail.com";   
        $scope.password="";
       // $scope.login();

    };
    
    $scope.login = function (){
        console.log($scope.password);
        
        $http.get($scope.appConfig+'/an/'+$scope.password, {
                url: $scope.password
            }).success(
                function(data){
                    console.log(data.status)
                }
            ).error(
                function(error){
                  console.log(error)
                }
            );
    }
    
    $scope.getAll = function () {
    
    
        $http.post($scope.appConfig+'/getAll').success(
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