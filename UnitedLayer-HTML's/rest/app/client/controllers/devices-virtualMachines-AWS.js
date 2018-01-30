app.controller('devices-virtualMachines-AWS', function($scope, $filter) {
    console.log('devices-virtualMachines-AWS');

    console.log('devices-virtualMachines-VMware');
    $scope.filteredItems = [];
    $scope.numberToDisplay = 20;
    $scope.items = [];

    $scope.sort = {
        sortingOrder: 'name',
        reverse: false
    };

    $scope.headers = [
        { orders: 'instanceID', name: 'Instance ID' },
        { orders: 'instanceType', name: 'Instance Type' },
        { orders: 'publicIP', name: 'Public IP' },
        { orders: 'availabilityZone', name: 'Availability Zone' },
        { orders: 'instanceState', name: 'Instance State' },
        { orders: 'launchTime', name: 'Launch Time' }

    ]

    for (i = 0; i < 5; ++i) {
        $scope.items.push({
            instanceID: 'i_' + i,
            instanceType: 't2_' + i,
            publicIP: '52.2' + i,
            availabilityZone: 'US_' + i,
            instanceState: 'running_' + i,
            launchTime: 'date_' + i
        });
    }

    $scope.loadMore = function() {
        if ($scope.numberToDisplay + 5 < $scope.items.length) {
            $scope.numberToDisplay += 5;
        } else {
            $scope.numberToDisplay = $scope.items.length;
        }
    };

    var searchMatch = function(haystack, needle) {
        if (!needle) {
            return true;
        }
        return haystack.toLowerCase().indexOf(needle.toLowerCase()) !== -1;
    };

    // init the filtered items
    $scope.search = function() {
        $scope.filteredItems = $filter('filter')($scope.items, function(item) {
            for (var attr in item) {
                if (searchMatch(item[attr], $scope.query))
                    return true;
            }
            return false;
        });

        // take care of the sorting order
        if ($scope.sort.sortingOrder !== '') {
            $scope.filteredItems = $filter('orderBy')($scope.filteredItems, $scope.sort.sortingOrder, $scope.sort.reverse);
        }
    };
    // functions have been describe process the data for display
    $scope.search();
})