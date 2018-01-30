app.controller('unitedCloud-devices-controller', function($scope) {
    console.log('componet unitedCloud-devices-controller');
    $scope.activeTabIndex = 0;
    angular.element('.mytabsclass').each(function() {
        var ar = this.id;
        angular.element('#' + ar).tabs();
    });

    $scope.steps = [
        { name: 'Firewalls', route: 'home.unitedCloudDevices.firewalls' },
        { name: 'Switches', route: 'home.unitedCloudDevices.switches' },
        { name: 'Load Balancers', route: 'home.unitedCloudDevices.load-balancers' },
        { name: 'Hypervisors', route: 'home.unitedCloudDevices.hypervisors' },
        { name: 'Virtual Machines', route: 'home.unitedCloudDevices.virtual-machines.all-VMs' }
    ]
})