app.controller('devices-hypervisors-controller', function($scope, $filter, $rootScope) {
    console.log('devices-hypervisors-controller');
    $scope.filteredItems = [];
    $scope.numberToDisplay = 20;
    $scope.items = [];

    $scope.sort = {
        sortingOrder: 'name',
        reverse: false
    };

    $scope.headers = [
        { orders: 'name', name: 'Name' },
        { orders: 'systemType', name: 'System Type' },
        { orders: 'virtualizationType', name: 'Virtualization Type' },
        { orders: 'OS', name: 'OS' },
        { orders: 'cloud', name: 'Cloud' }
    ]

    for (i = 0; i < 5; ++i) {
        $scope.items.push({
            name: 'sc_' + i,
            systemType: 'sc_' + i,
            virtualizationType: 'none_' + i,
            OS: 'ESXi_' + i,
            cloud: 'VMware Demo_' + i
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

        //API call Getdetails(args)
        //Return object is like

        $scope.detalis = {
            "Hostname": item.name,
            "Internal Identifier": 'cisco_' + i,
            "Instance Name": 'sdasdk_' + i,
            "Instance Type": 'xyz_' + i,
            "Operating System": item.OS,
            "Manufacturer": 'sdasdk_' + i,
            "State": 'sdasdk_' + i
        }
        $rootScope.apiData = $scope.detalis;

    };
})