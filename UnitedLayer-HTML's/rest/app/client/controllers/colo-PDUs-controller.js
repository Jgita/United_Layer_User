app.controller('colo-PDUs-controller', function($scope, $filter, $rootScope) {
    console.log('colo-PDUs-controller');
    $scope.numberToDisplay = 20;
    $scope.items = [];

    $scope.sort = {
        sortingOrder: 'name',
        reverse: false
    };

    $scope.headers = [
        { orders: 'name', name: 'Name' },
        { orders: 'IPAddress', name: 'IP Address' },
        { orders: 'model', name: 'Model' },
        { orders: 'cabinet', name: 'Cabinet' }
    ]

    for (i = 0; i < 7; ++i) {
        $scope.items.push({
            name: 'PDUA_' + i,
            IPAddress: '209.10.0.' + i,
            model: 'APUY40_' + i,
            cabinet: 'SF10' + i
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

    $scope.routing = function(item) {
        $rootScope.apiData = item
        console.log('routing item', item)
    };
})