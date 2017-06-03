angular.module('Demo', [])
  .controller('Demo', function($scope) {
    $scope.data = [
      { text: "AngularJS is a toolset for building the framework most suited to your application development.<br> It is fully extensible and works well with other libraries.<br> Every feature can be modified or replaced to suit your unique development workflow and feature needs. " }
    ]
  })
  .filter('highlight', function($sce) {
    return function(text, phrase) {
      if (phrase) text = text.replace(new RegExp('('+phrase+')', 'gi'),
        '<span class="highlighted">$1</span>')

      return $sce.trustAsHtml(text)
    }
  })
