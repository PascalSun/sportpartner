<script>
var app = angular.module("matchApp", []);
app.controller("matchCtrl", function ($scope) {
    $scope.filterInfo="The following users match your preferences: ";
    $scope.updateForm = function () {
        $scope.filterInfo = "Updated with your new filter: ";
        agewant = prefer.age;
        skillwant = prefer.skill;
        sex = prefer.sex;
        sports = prefer.sports;
    };
});
</script>