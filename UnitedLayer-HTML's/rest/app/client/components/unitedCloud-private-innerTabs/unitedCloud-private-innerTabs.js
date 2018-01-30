app.directive('privateInnerTabs', function(usSpinnerService, $rootScope, $http) {
    return {
        restrict: "E",
        templateUrl: 'rest/app/client/components/unitedCloud-private-innerTabs/unitedCloud-private-innerTabs.html',

        link: function($scope, $elem, $attr) {
            console.log('privateInnerTabs', $attr.name);
            $scope.name = $attr.name;
            $scope.activeTabIndex = 0;
            console.log(' $scope.name ', $scope.name)

            $rootScope.privateName = $attr.name

            // function MyCtrl($scope, $http, User) {

            //using $http <!--ANgular busy loader-->
            $scope.myPromise = $http.get('http://httpbin.org/delay/3');

            //if you have a User class based on $resource

            // }

            //    angular spinner
            // $scope.startSpin = function() {
            //     if (!$scope.spinneractive) {
            //         usSpinnerService.spin('spinner-1');
            //         $scope.startcounter++;
            //     }
            // };

            // $scope.stopSpin = function() {
            //     if ($scope.spinneractive) {
            //         usSpinnerService.stop('spinner-1');
            //     }
            // };
            // $scope.spinneractive = false;

            // $rootScope.$on('us-spinner:spin', function(event, key) {
            //     $scope.spinneractive = true;
            // });

            // $rootScope.$on('us-spinner:stop', function(event, key) {
            //     $scope.spinneractive = false;
            // });

            //  End angular spinner

            if ($scope.name == 'vmware') {
                $scope.tabs = [
                    { name: 'Summary', route: 'home.unitedCloudPrivate.VMware.summary' },
                    { name: 'Hypervisors', route: 'home.unitedCloudPrivate.VMware.hypervisors' }
                ];
            } else if ($scope.name == 'OpenStack') {
                $scope.tabs = [
                    { name: 'Summary', route: 'home.unitedCloudPrivate.OpenStack.summary' },
                    { name: 'Hypervisors', route: 'home.unitedCloudPrivate.OpenStack.hypervisors' }
                ];
            } else if ($scope.name == 'HyperV') {
                $scope.tabs = [
                    { name: 'Summary', route: 'home.unitedCloudPrivate.HyperV.summary' },
                    { name: 'Hypervisors', route: 'home.unitedCloudPrivate.HyperV.hypervisors' }
                ];
            }
        }
    }
})