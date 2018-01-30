app.controller('organizations-controller', function($scope, $state) {
    console.log('organizations-controller');

    $scope.activeTabIndex = 0;
    $scope.tabs = [
        { name: 'Company', route: 'home.server.organizations.companyTab.servers' },
        { name: 'Assets', route: 'home.server.organizations.assetsTab' },
        { name: 'Colo', route: 'home.server.organizations.coloTab' },
        { name: 'Opportunities', route: 'home.server.organizations.opportunitiesTab' }
    ];
    console.log(' $scope.activeTabIndex', $scope.activeTabIndex)
})