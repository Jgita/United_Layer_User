app.directive('headerContent', function() {
    return {
        restrict: "E",
        templateUrl: 'rest/app/client/components/header-content/header-content.html',
        link: function($scope, $elem, $attr) {

            $scope.userName = 'Alex Doe';
            $scope.notificationCount = 3;

            $scope.breadCrumbs = {
                    'setup': {
                        id: 'item1',
                        title: 'United Setup',
                        route: 'home.unitedSetup',
                        top: false
                    },
                    'Tenant': {
                        id: 'item2',
                        title: 'Tenant Management',
                        route: 'home.tenantManagement',
                        top: true
                    },
                    'organizations': {
                        id: 'item3',
                        title: 'Organizations',
                        route: 'home.organizations',
                        top: true
                    },
                    'assets': {
                        id: 'item4',
                        title: 'Assets',
                        route: 'home.assets',
                        top: true

                    },
                    'server': {
                        id: 'item5',
                        title: 'Server',
                        route: 'home.server.organizations.companyTab.servers',
                        top: true
                    }
                }
                // $scope.breadCrumbs = {
                //     'setup': {
                //         id: 'item1',
                //         title: ' UnitedCloud',
                //         route: 'home.unitedSetup',
                //         top: false
                //     },
                //     'Tenant': {
                //         id: 'item2',
                //         title: 'Private Cloud',
                //         route: 'home.tenantManagement',
                //         top: true
                //     },
                //     'organizations': {
                //         id: 'item3',
                //         title: 'OpenStack Demo',
                //         route: 'home.organizations',
                //         top: true
                //     },
                //     'server': {
                //         id: 'item5',
                //         title: 'Hypervisors',
                //         route: 'home.server.organizations.companyTab.servers',
                //         top: true
                //     }
                // }

        }

    }
})