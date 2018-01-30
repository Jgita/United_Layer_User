app.controller('private-summery-details', function($scope, $rootScope, $filter) {
    console.log('private-summery-details');


    console.log('private-summery-details', $rootScope.privateName);

    $scope.filteredItems = [];
    $scope.numberToDisplay = 20;
    $scope.items = [];

    $scope.sort = {
        sortingOrder: 'name',
        reverse: false
    };

    if ($rootScope.privateName == 'vmware') {
        $scope.headers = [
            { orders: 'name', name: 'Name' },
            { orders: 'OS', name: 'Operating System' },
            { orders: 'hostName', name: 'Host Name' },
            { orders: 'CPUCores', name: 'CPU Cores' },
            { orders: 'vCPUs', name: 'vCPUs' },
            { orders: 'memory', name: 'Memory' },
            { orders: 'state', name: 'State' }
        ]

        for (i = 0; i < 20; ++i) {
            $scope.items.push({
                name: 'VM-terraform' + i,
                OS: 'Linux' + i,
                hostName: 'sunfish.net' + i,
                CPUCores: i,
                vCPUs: i,
                memory: i,
                state: 'poweredOn' + i
            });
        }
    } else if ($rootScope.privateName == 'OpenStack') {
        $scope.headers = [
            { orders: 'name', name: 'Name' },
            { orders: 'id', name: 'ID' },
            { orders: 'vCPUs', name: 'vCPUs' },
            { orders: 'memory', name: 'Memory (MB)' },
            { orders: 'disk', name: 'Disk (GB)' },
            { orders: 'image', name: 'Image' },
            { orders: 'IPAddress', name: 'IP Address' },
            { orders: 'status', name: 'Status' }
        ]

        for (i = 0; i < 20; ++i) {
            $scope.items.push({
                name: 'tf_web' + i,
                id: 'e5819815' + i,
                vCPUs: 'sunfish.net' + i,
                memory: i,
                disk: i,
                image: 'Debian 8(dev user)' + i,
                IPAddress: '10.1.0.121' + i,
                status: 'ACTIVE'
            });
        }
    } else if ($rootScope.privateName == 'HyperV') {
        // $scope.headers = [
        //     { orders: 'name', name: 'Name' },
        //     { orders: 'OS', name: 'Operating System' },
        //     { orders: 'hostName', name: 'Host Name' },
        //     { orders: 'CPUCores', name: 'CPU Cores' },
        //     { orders: 'vCPUs', name: 'vCPUs' },
        //     { orders: 'memory', name: 'Memory' },
        //     { orders: 'state', name: 'State' }
        // ]
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