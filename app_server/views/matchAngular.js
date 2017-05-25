<script>
var app = angular.module("matchApp", []);
app.controller("matchCtrl", function($scope,$http) {
    $scope.updateForm = function () {
        var sex = document.getElementById('sex').value;
        var sport = document.getElementById('sport').value;
        var skill = document.getElementById('skill').value;
        var age = document.getElementById('age').value;
        var address = document.getElementById('address').value;

        console.log(document.getElementById("sport").value);
        $http({
            method : "POST",
            url : "/api/match",
            data: {
              'sex' : sex,
              'sport':sport,
              'skill':skill,
              'age':age,
              'address':address
                }
          }).then(function mySuccess(response) {
              $scope.sexSelected = response.data;
            }, function myError(response) {
              $scope.myWelcome = response.statusText;
          });
        };
      });


</script>
