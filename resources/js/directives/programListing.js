app.directive('programListing', function() {
  return {
    restrict: 'E',
    scope: {
      listing: '='
    },
    templateUrl: 'resources/js/directives/programListing.html'
  };
});
