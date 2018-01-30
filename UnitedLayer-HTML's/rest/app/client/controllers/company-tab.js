app.controller('companyTab-controller', function($scope, $state) {
    console.log('companyTab-controller');

    $scope.tabs = [
        { name: 'Servers', route: 'home.server.organizations.companyTab.servers' },
        { name: 'Virtual Machines', route: 'home.server.organizations.companyTab.virtual-machines' },
        { name: 'Firewalls', route: 'home.server.organizations.companyTab.firewalls' },
        { name: 'Switches', route: 'home.server.organizations.companyTab.load-balancers' },
        { name: 'Load Balancers', route: 'home.server.organizations.companyTab.switches' }
    ];
})