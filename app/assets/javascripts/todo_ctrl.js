(function() {
  "use strict";

  angular.module("app").controller("todoCtrl", function($scope) {

    $scope.todos = [
      {
        text: "Walk the dog",
        finishness: false
      },
      {
        text: "Play StarCraft",
        finishness: false
      },
      {
        text: "Visit Grandma",
        finishness: false
      },
      {
        text: "Cook Dinner",
        finishness: false
      }
    ];
    $scope.addTask = function(task) {
      if (task.text) {
        $scope.todos.push(task);
        $scope.newTask = "";
      }
    };

    $scope.positive = function(task) {
      return task.indexOf("stupid") == -1;
    };

    $scope.strikeTask = function(task) {
      if (task.finishness) {
        task.finishness = false;
      }
      else {
        task.finishness = true;
      }

    }




    window.scope = $scope;


  });
}());