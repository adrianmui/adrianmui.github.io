app.controller("MainCtrl", 
  ["$scope", "ProjectService",
  function($scope, ProjectService) {



  ProjectService.loadData()
    .then( function() {
      console.log("loading projects..");
      $scope.projects = ProjectService.getAll();
  });
}])
