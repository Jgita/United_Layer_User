app.controller('devices-virtualMachines-VMware', function($scope, $filter) {
    console.log('devices-virtualMachines-VMware');
    $scope.filteredItems = [];
    $scope.numberToDisplay = 20;
    $scope.items = [];

    $scope.sort = {
        sortingOrder: 'name',
        reverse: false
    };

    $scope.headers = [
        { orders: 'name', name: 'Name' },
        { orders: 'os', name: 'Operating System' },
        { orders: 'hostName', name: 'Host Name' },
        { orders: 'CPUCores', name: 'CPU Cores' },
        { orders: 'vCPUs', name: 'vCPUs' },
        { orders: 'memory', name: 'Memory' },
        { orders: 'state', name: 'State' }

    ]

    for (i = 0; i < 5; ++i) {
        $scope.items.push({
            name: 'vm_' + i,
            os: 'vm_' + i,
            hostName: 'sunfish.net' + i,
            CPUCores: i,
            vCPUs: i,
            memory: '240' + i,
            state: 'powerOn' + i

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