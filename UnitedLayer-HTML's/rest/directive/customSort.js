app.directive("customSort", function() {
    return {
        restrict: 'A',
        transclude: true,
        scope: {
            sort: '='
        },
        template: '<a ng-click="sort_by(order)" style="color: #555555;">' +
            '    <span ng-transclude></span>' +
            '    <i ng-class="selectedCls(order)"></i>' +
            '</a>',
        link: function(scope, elm, attr) {

                scope.order = attr.order

                // change sorting order
                scope.sort_by = function(newSortingOrder) {
                    var sort = scope.sort;

                    if (sort.sortingOrder == newSortingOrder) {
                        sort.reverse = !sort.reverse;
                    }

                    sort.sortingOrder = newSortingOrder;
                };

                scope.selectedCls = function(column) {
                    if (column == scope.sort.sortingOrder) {
                        return ('fa fa-' + ((scope.sort.reverse) ? 'sort-desc' : 'sort-asc'));
                    } else {
                        return 'fa fa-sort'
                    }
                };
            } // end link fa fa-angle-down
    }
});