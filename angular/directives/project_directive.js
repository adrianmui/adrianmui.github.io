app.directive("proj",
  [function(){
  return {
    templateUrl: 'angular/directives/project_directive.html',
    restrict: "A",
    scope: {
      project: '='
    },
    link: function(scope) {
    }
  };
}]);
