var todoList = angular.module('todoList', ['ngRoute']);

todoList.config(['$routeProvider', function($routeProvider){
    $routeProvider
    .when('/', {
        templateUrl: 'partials/listoftasks.html',
        controller: 'taskList'
    })
}]);

todoList.controller('taskList',['$scope', '$http', function($scope, $http){

    $http({
        url: 'list_data/tasks.json',
        method: 'GET',
        dataType: 'json',
    }).then(function (response) {
        $scope.tasks = response.data;
    });


    $scope.boxChecked = function (task){
    }


    $scope.addTask = function(){
        alert("Adding Task");
    }


}]);