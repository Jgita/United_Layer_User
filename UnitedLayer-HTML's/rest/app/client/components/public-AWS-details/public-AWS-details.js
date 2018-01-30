app.controller('public-AWS-details', function($scope) {
    console.log('public-AWS-details');
    $scope.activeTabIndex = 0
    $scope.tabs = [
        { name: 'Instances', route: 'home.unitedCloudPublic.details.instances' },
        { name: 'Elastic Block Store', route: 'home.unitedCloudPublic.details.ElasticBlock' },
        { name: 'Network & Security', route: 'home.unitedCloudPublic.details.Network' },
        { name: 'Load Balancing', route: 'home.unitedCloudPublic.details.loadBalancing' },
        { name: 'Auto Scaling', route: 'home.unitedCloudPublic.details.autoScaling' }
    ];
});