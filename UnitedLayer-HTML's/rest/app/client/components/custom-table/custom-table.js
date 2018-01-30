app.directive('customTable', function($filter, $state, $rootScope) {
    return {
        restrict: "E",
        templateUrl: 'rest/app/client/components/custom-table/custom-table.html',
        link: function($scope, $elem, $attr) {

            $scope.filteredItems = [];
            $scope.numberToDisplay = 20;
            $scope.items = angular.fromJson($attr.data);
            $scope.state = $state.current.name;

            $scope.routing = function(item) {
                console.log('routing item', item)
                $rootScope.$broadcast('details', item);
            };

            $scope.sort = {
                sortingOrder: 'name',
                reverse: false
            };

            $scope.headers = [
                { orders: 'name', name: 'Name' },
                { orders: 'modal', name: 'Modal' },
                { orders: 'type', name: 'Type' },
                { orders: 'manageStatus', name: 'Manage Status' }
            ]

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

        }

    }
})