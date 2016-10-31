app.factory('ProjectService', 
  ['_', '$http',
  function(_, $http) {

  var _projects = [];

  var stub = {};

  stub.loadData = function() {
    return $http.get("data/projects.json")
      .then(function(response) {
        console.log(response);
        _projects = _.values(response.data);
    });
  };

  stub.getAll = function() {
    return _projects;
  }

  return stub;
}]);