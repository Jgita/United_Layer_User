app.controller('unitedCloud-public-controller', function($scope) {
    console.log('unitedCloud-public-controller');
    $scope.activeTabIndex = 0;
    angular.element('.mytabsclass').each(function() {
        var ar = this.id;
        angular.element('#' + ar).tabs();
    });

    $scope.steps = [
        { name: 'AWS', route: 'home.unitedCloudPublic.AWS' },
        { name: 'Azure', route: 'home.unitedCloudPublic.Azure' }
    ]
})