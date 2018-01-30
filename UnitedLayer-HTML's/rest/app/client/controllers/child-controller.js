app.controller('child-controller', function($scope, $state, $rootScope) {
    console.log('child-controller >$state.current.name', $rootScope.currentState)
    $state.go('home.server.organizations.companyTab.servers');

})