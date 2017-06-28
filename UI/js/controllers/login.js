myApp.controller('LoginController', ['$scope','$http', function($scope,$http) {

    $scope.init = function(){

        console.log("Init started AdmiLT");
        $scope.appConfig="http://localhost:3000";
        $scope.all;
        $scope.getAll();
        $scope.email="p@gmail.com";   
        $scope.password="123";
        $scope.login();

    };
    
    $scope.login = function (){
        console.log($scope.email);
        console.log($scope.password);
        
        $http.post($scope.appConfig+'/authUser',{
            email: $scope.email,   
            password: $scope.password
            }).success(
                function(data){
                    console.log(data)
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