angular.module("FlyApp")
.controller("PlanesCtrl", ["$scope", "PlanesAPI", function($scope, PlanesAPI){
  $scope.planes = [];

  PlanesAPI.getPlanes().then(function success(response){
    $scope.planes = response.data;
  }, function error(err){
    console.log("Oh no", err);
  })


}])
.controller("DetailCtrl", ["$scope", "$stateParams", "PlanesAPI", function($scope, $stateParams, PlanesAPI){
  $scope.plane = {};

  PlanesAPI.getPlane($stateParams.id).then(function success(response){
    console.log("success", response);
    $scope.plane = response.data;
  }, function error(err){
    console.log("error", err);
  })
}])

.controller("SearchCtrl", ["$scope", "$stateParams", "PlanesAPI", function($scope, $stateParams, PlanesAPI){
  $scope.planes = [];

  PlanesAPI.getPlanes().then(function success(response){
    $scope.planes = response.data;
  }, function error(err){
    console.log("Oh no", err);
  })
}])

.filter("fixgrammar", function() {
  return function(input){
    if(input == 1){
      return "1 engine";
    }
    else{
      return input + " engines";
    }
  }
})
