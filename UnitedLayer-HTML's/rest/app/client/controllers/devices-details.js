app.controller('devices-details', function($scope, $rootScope, $state) {
    console.log('devices-firewalls-details');
    console.log('apiDtaa', $rootScope.apiData)

    $scope.getItem = function(item) {
        console.log('getItem item', item)
        $rootScope.$broadcast('hyperInnerDetails', item);
    };

})