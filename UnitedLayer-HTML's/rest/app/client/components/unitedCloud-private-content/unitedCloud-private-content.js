app.controller('unitedCloud-private-controller', function($scope) {
    console.log('componet unitedCloud-private-controller');

    angular.element('.mytabsclass').each(function() {
        var ar = this.id;
        angular.element('#' + ar).tabs();
    });

    $scope.activeTabIndex = 0;

    $scope.steps = [
        { name: 'VMware Demo', route: 'home.unitedCloudPrivate.VMware.summary' },
        { name: 'OpenStack Demo', route: 'home.unitedCloudPrivate.OpenStack.summary' },
        { name: 'Hyper-V Demo', route: 'home.unitedCloudPrivate.HyperV.summary' },
    ]
})