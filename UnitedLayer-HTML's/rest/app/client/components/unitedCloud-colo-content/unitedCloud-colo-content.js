app.controller('unitedCloud-colo-controller', function($scope) {
    console.log('componet unitedCloud-colo-controller');
    $scope.activeTabIndex = 0;
    angular.element('.mytabsclass').each(function() {
        var ar = this.id;
        angular.element('#' + ar).tabs();
    });

    $scope.steps = [
        { name: 'Cabinets', route: 'home.unitedCloudColo.cabinets' },
        { name: 'PDUs', route: 'home.unitedCloudColo.PDUs' },
        { name: 'Cages', route: 'home.unitedCloudColo.cages' }
    ]
})