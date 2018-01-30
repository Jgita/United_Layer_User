app.controller('devices-virtualMachines-allVMs', function($scope, $filter) {
    console.log('devices-virtualMachines-AllVMs');
    $scope.filteredItems = [];
    $scope.numberToDisplay = 20;
    $scope.items = [];

    $scope.sort = {
        sortingOrder: 'name',
        reverse: false
    };

    $scope.headers = [
        { orders: 'name', name: 'Name' },
        { orders: 'id', name: 'ID' },
        { orders: 'NICs', name: 'NICs' },
        { orders: 'OSName', name: 'OS Name' },
        { orders: 'OSVersion', name: 'OS Version' },
        { orders: 'Status', name: 'Status' }
        // { orders: 'actions', name: 'Actions' }
    ]

    for (i = 0; i < 10; ++i) {
        $scope.items.push({
            name: 'vm_' + i,
            id: 'vm_' + i,
            NICs: i,
            OSName: 'Ubantu_' + i,
            OSVersion: '12' + i,
            Status: 'no_' + i

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