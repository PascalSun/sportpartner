<script>
var app = angular.module("matchApp", []);
app.controller("matchCtrl", function($scope,$http) {
    $scope.normal=true;
    $scope.search = false;
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
              console.log(response.data.error);
              if(response.data.error){
                if(response.data.error=='login'){
                  window.location = "/login";
                }else{
                  window.alert("Some Problems with your "+response.data.error);
                }
              }
              else{
                console.log(response.data.partners[0]);
                var partners = response.data.partners;
                var users = response.data.user;
                console.log(partners);
                $scope.normal = false;
                $scope.Math = window.Math;
                $scope.teammates = partners;
                $scope.user = users;
                $scope.search = true;
              }
            }, function myError(response) {
              window.alert("Some Problems with your match conditions");
          });
        };
      });
</script>
