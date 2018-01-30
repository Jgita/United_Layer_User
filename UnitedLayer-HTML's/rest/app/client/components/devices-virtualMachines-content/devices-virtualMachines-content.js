app.controller('devices-virtualMachines-controller', function($scope) {
    console.log('devices-virtualMachines-controller');
    $scope.activeTabIndex = 0
    $scope.tabs = [
        { name: 'All VMs', route: 'home.unitedCloudDevices.virtual-machines.all-VMs' },
        { name: 'OpenStack VMs', route: 'home.unitedCloudDevices.virtual-machines.OpenStack-VMs' },
        { name: 'VMware VMs', route: 'home.unitedCloudDevices.virtual-machines.VMware-VMs' },
        { name: 'AWS VMs', route: 'home.unitedCloudDevices.virtual-machines.AWS-VMs' },
        { name: 'Azure VMs', route: 'home.unitedCloudDevices.virtual-machines.Azure-VMs' }
    ];
});