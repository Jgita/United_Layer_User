app.controller('private-hypervisors', function($scope, $filter, usSpinnerService, $rootScope) {
    console.log('private-hypervisors');
    $scope.filteredItems = [];
    $scope.numberToDisplay = 20;
    $scope.items = [];

    console.log('private-hypervisors>>name', $scope.name)

    $scope.sort = {
        sortingOrder: 'serverName',
        reverse: false
    };

    $scope.headers = [
        { orders: 'serverName', name: 'Server Name' },
        { orders: 'type', name: 'Type' },
        { orders: 'proxyServerName', name: 'Proxy Server Name' },

    ]

    for (i = 0; i < 3; ++i) {
        $scope.items.push({
            serverName: 'scaphoid' + i,
            type: 'ESXI' + i,
            proxyServerName: 'scaphoid' + i
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