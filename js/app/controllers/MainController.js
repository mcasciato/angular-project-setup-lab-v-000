function MainController($scope) {
  $scope.name = 'Michael Casciato';
}

angular
  .module('app')
  .controller('MainController', MainController);
