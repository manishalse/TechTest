// Code goes here
(function() {

  var app = angular.module("NameEntriesForm", []);

  app.controller("NameController", function($scope) {

    $scope.onsubmit = function() {
      $scope.submitted = true;
    };

    $scope.hasError = function(validation) {
      if (validation) {
        return (($scope.nameentry.name.$dirty && $scope.nameentry.name.$error[validation]) || ($scope.submitted && $scope.nameentry.name.$error[validation]) || ($scope.nameentry.dept.$dirty && $scope.nameentry.dept.$error[validation]) || ($scope.submitted && $scope.nameentry.dept.$error[validation]) || ($scope.nameentry.quote.$dirty && $scope.nameentry.quote.$error[validation]) || ($scope.submitted && $scope.nameentry.quote.$error[validation]));
      }
      return (($scope.nameentry.name.$dirty && $scope.nameentry.name.$invalid) || ($scope.submitted && $scope.nameentry.name.$invalid) || ($scope.nameentry.dept.$dirty && $scope.nameentry.dept.$invalid) || ($scope.submitted && $scope.nameentry.dept.$invalid) || ($scope.nameentry.quote.$dirty && $scope.nameentry.quote.$invalid) || ($scope.submitted && $scope.nameentry.quote.$invalid));

    };

    $scope.changestyle = function() {

      if ($scope.chkselct === true) {

        $scope.bckgrndchng = {
          "color": "white",
          "background-color": "black"
        };
        return $scope.bckgrndchng;
      } else {
        $scope.bckgrndchng = {
          "color": "black",
          "background-color": "white"
        };
        return $scope.bckgrndchng;

      }
    };



  });
}());