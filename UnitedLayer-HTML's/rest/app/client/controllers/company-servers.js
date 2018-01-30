app.controller('companyServers-controller', function($scope, $filter) {
    console.log('companyServers-controller');

    $scope.filteredItems = [];
    $scope.numberToDisplay = 20;
    $scope.items = [];

    $scope.sort = {
        sortingOrder: 'name',
        reverse: false
    };

    $scope.headers = [
        { orders: 'name', name: 'Name' },
        { orders: 'cloud', name: 'Cloud' },
        { orders: 'asset', name: 'Asset Tag' },
        { orders: 'os', name: 'Operating System' },
        { orders: 'cpu', name: 'CPUs' },
        { orders: 'cores', name: 'Cores' },
        { orders: 'memory', name: 'Memory' },
        { orders: 'capacity', name: 'Capacity (GB)' }
    ]

    for (i = 0; i < 500; ++i) {
        $scope.items.push({
            name: 'ser_' + i,
            cloud: 'clo_' + i,
            assetTag: 'ass_' + i,
            OS: 'os_' + i,
            CPUs: 'cpu_' + i,
            cores: 'cores_' + i,
            memory: 'mem_' + i,
            capacity: 'cap_' + i
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
});