var app = angular.module('app');

app.controller('navCtrl', function($scope, $location){
    $scope.init = function(){
      $scope.navList = [
        {name: "Test", href: "#"},
        {name: "About", href: "#/about"},
        {name: "viewHistory", href: "#/viewHistory"}
      ];
    };
});
