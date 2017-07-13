myApp.controller('AnalyticsController', ['$scope','$http', function($scope,$http) {

    $scope.init = function(){

        console.log("Init started Anatlitics");
        $scope.appConfig="http://localhost:3000";
//        $scope.all;
//        $scope.getAll();
//        $scope.x=[];
        $scope.majorOne;
        $scope.majorTwo;
        $scope.majorThree;
        $scope.majorFour;
        $scope.majorFive;
        $scope.majorSix;
        $scope.majorSeven;
        $scope.majorEight;
//        
//        $scope.xTag=[];
//        $scope.subDomain=[];
//        $scope.majorOneTag;
//        $scope.majorTwoTag;
//        $scope.majorThreeTag;
//        $scope.majorFourTag;
        $scope.load();

    };
    
    
    $scope.getAll = function () {
    
    
        $http.get('https://api.builtwith.com/v11/api.json?KEY=92cd75b1-99fd-4dc7-ba32-3193e3fb9052&LOOKUP=https://www.ubuntu.com/').success(
                function(data){
                 //   console.log(data);
                    for(var i=0;i<data.Results[0].Result.Paths.length;i++){
                       // console.log(data.Results[0].Result.Paths[i].Technologies);
                        for(var x=0;x<data.Results[0].Result.Paths[i].Technologies.length;x++){
                           // console.log(data.Results[0].Result.Paths[i].Technologies[x])
                            $scope.x.push(data.Results[0].Result.Paths[i].Technologies[x].Name);
                        }
                        
                    }
                        $scope.majorOne=$scope.x[0];
                        $scope.majorTwo=$scope.x[1];
                        $scope.majorThree=$scope.x[2];
                        $scope.majorFour=$scope.x[3];
                    
                    
                    
                     //   console.log(data);
                    for(var i=0;i<data.Results[0].Result.Paths.length;i++){
                       // console.log(data.Results[0].Result.Paths[i].Technologies);
                        for(var x=0;x<data.Results[0].Result.Paths[i].Technologies.length;x++){
                           // console.log(data.Results[0].Result.Paths[i].Technologies[x])
                            $scope.xTag.push(data.Results[0].Result.Paths[i].Technologies[x].Tag);
                        }
                        
                    }
                        $scope.majorOneTag=$scope.xTag[0];
                        $scope.majorTwoTag=$scope.xTag[1];
                        $scope.majorThreeTag=$scope.xTag[2];
                        $scope.majorFourTag=$scope.xTag[3];
                    
                    
                    for(var i=0;i<data.Results[0].Result.Paths.length;i++){
                        //console.log(data.Results[0].Result.Paths[i].SubDomain);
                        $scope.subDomain.push(data.Results[0].Result.Paths[i].Url);
                    }
                   // console.log($scope.subDomain);

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
                    console.log(data.applications[0].name);
                    
                    $scope.majorOne=data.applications[0].name;
                    $scope.majorTwo=data.applications[1].name;
                    $scope.majorThree=data.applications[2].name;
                    $scope.majorFour=data.applications[3].name;
                    $scope.majorFive=data.applications[4].name;
                    $scope.majorSix=data.applications[5].name;
                    $scope.majorSeven=data.applications[6].name;
                    $scope.majorEight=data.applications[7].name;
                }
            ).error(
                function(error){
                  console.log(error)
                }
            );
        
    }
    
    $scope.init();


}]);