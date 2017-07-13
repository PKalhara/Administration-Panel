myApp.controller('UrlController', ['$scope','$http','$q','$location','toastr', function($scope,$http,$q,$location,toastr) {

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
                    console.log(data);
                     $location.url('/analytics');
                }
            ).error(
                function(error){
                  console.log(error)
                }
            );
    }
    
    $scope.load = function () {
    
       $http.get($scope.appConfig+'/my_file.json', {
            }).success(
                function(data){
                    console.log(data.applications);
                }
            ).error(
                function(error){
                  console.log(error)
                }
            );
        
    }

    
    $scope.init();


}]);