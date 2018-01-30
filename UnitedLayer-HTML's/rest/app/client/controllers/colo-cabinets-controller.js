app.controller('colo-cabinets-controller', function($scope, $state, $filter, $rootScope) {
    console.log('colo-cabinets-controller');
    $scope.numberToDisplay = 20;
    $scope.items = [];

    $scope.sort = {
        sortingOrder: 'name',
        reverse: false
    };

    $scope.headers = [
        { orders: 'name', name: 'Name' },
        { orders: 'model', name: 'model' },
        { orders: 'dataCenter', name: 'Data Center' }
    ]

    for (i = 0; i < 5; ++i) {
        $scope.items.push({
            name: 'SF_' + i,
            model: 'Standard cab' + i,
            dataCenter: 'SF10' + i
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
            // $rootScope.$broadcast('details', item);
            //   console.log('details', $scope.$emit('details', { message: item }))
    };

})