app.directive('innerFrame', function($state) {
    return {
        restrict: "E",
        templateUrl: 'rest/app/client/components/inner-frame/inner-frame.html',
        link: function($scope, $elem, $attr) {
            console.log('inner-frame');


            $scope.activeTabIndex = 0;

            angular.element('.mytabsclass').each(function() {
                var ar = this.id;
                angular.element('#' + ar).tabs();
            });

            $scope.steps = [
                { name: 'Organizations', route: 'home.server.organizations.companyTab.servers' },
                { name: 'Users', route: 'home.server.users' }
            ]
        }
    }
})