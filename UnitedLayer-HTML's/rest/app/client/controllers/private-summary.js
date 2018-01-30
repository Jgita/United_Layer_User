app.controller('private-summary', function($scope, $filter, $rootScope, $timeout, $uibModal) {
    console.log('private-summary');
    // summary table variables
    $scope.items = [];

    console.log('$scope.name>>', $scope.name)


    $scope.headers = [
        { orders: 'name', name: 'Name' },
        { orders: 'virtualizationPlatform', name: 'Virtualization Platform' },
        { orders: 'Servers', name: 'Servers' },
        { orders: 'VMs', name: 'Virtual Machines' },
        { orders: 'networkDevices', name: 'NetworkDevices' }
    ]

    if ($scope.name == 'vmware') {
        for (i = 0; i < 1; ++i) {
            $scope.items.push({
                name: 'VMware Demo' + i,
                virtualizationPlatform: 'VMware' + i,
                Servers: i,
                VMs: i,
                networkDevices: i
            });
        }

        $scope.componentSummary = [
            { name: 'Switches', icon: 'sitemap greenbg', color: 'green bigtext', count: '12' },
            { name: 'Load Balancers', icon: 'balance-scale yellowbg', color: 'yellow bigtext', count: '19' },
            { name: 'Virtual Machines', icon: 'object-group bluebg', color: 'blue bigtext', count: '19' },
            { name: 'Firewalls', icon: 'fire pinkbg', color: 'pink bigtext', count: '14' },
            { name: 'Servers / Hypervisors', icon: 'server redbg', color: 'red bigtext', count: '25' },
        ]

        $scope.cardBoxSummary = [
            { header: 'VCPUs', name: 'VCPUs', totalCount: 46904 + ' Mhz', availableCount: 39540 + ' Mhz', class: 'paddingleft paddingright' },
            { header: 'Storage Disk (GB)', name: 'Storage', totalCount: 3226 + ' GB', availableCount: 1141 + ' GB', class: 'paddingleft paddingright' },
            { header: 'RAM (MB)', name: 'RAM', totalCount: 56 + ' GB', availableCount: 19 + ' GB', class: 'paddingleft' }
        ]

        $scope.cloudData = {
            "Name": 'VMware Demo',
            "Datacenter": 'SF10',
            "Platform": 'VMware',
            "Created": 'Oct 5, 2016 7:00:12 AM',
            "Updated": 'Apr 1, 2017 8:29:55 AM'
        }
        progressBar();
        $scope.paddingtop = 'paddingtop';

    } else if ($scope.name == 'OpenStack') {

        for (i = 0; i < 1; ++i) {
            $scope.items.push({
                name: 'OpenStack Demo' + i,
                virtualizationPlatform: 'OpenStack' + i,
                Servers: i,
                VMs: i,
                networkDevices: i
            });
        }

        $scope.componentSummary = [
            { name: 'Switches', icon: 'sitemap greenbg', color: 'green bigtext', count: '0' },
            { name: 'Load Balancers', icon: 'balance-scale yellowbg', color: 'yellow bigtext', count: '0' },
            { name: 'Virtual Machines', icon: 'object-group bluebg', color: 'blue bigtext', count: '0' },
            { name: 'Firewalls', icon: 'fire pinkbg', color: 'pink bigtext', count: '1' },
            { name: 'Servers / Hypervisors', icon: 'server redbg', color: 'red bigtext', count: '1' },
        ]

        $scope.cardBoxSummary = [
            { header: 'VCPUs', name: 'VCPUs', totalCount: 16 + 'Mhz', availableCount: 10 + 'Mhz', class: 'paddingleft paddingright' },
            { header: 'Storage Disk (GB)', name: 'Storage', totalCount: 5453 + 'GB', availableCount: 5371 + 'GB', class: 'paddingleft paddingright' },
            { header: 'RAM (MB)', name: 'RAM', totalCount: 32 + 'GB', availableCount: 22 + 'GB', class: 'paddingleft' }
        ]


        $scope.cloudData = {
            "Name": 'OpenStack Demo',
            "Datacenter": 'SF10',
            "Platform": 'OpenStack',
            "Created": 'Feb 1, 2017 3:35:55 PM',
            "Updated": 'Apr 1, 2017 8:57:36 AM'
        }

        progressBar();
        $scope.paddingtop = 'paddingtop';

    } else if ($scope.name == 'HyperV') {

        console.log('$scope.name', $scope.name)
        for (i = 0; i < 1; ++i) {
            $scope.items.push({
                name: 'Hyper-V Demo' + i,
                virtualizationPlatform: 'Hyper-V' + i,
                Servers: i,
                VMs: i,
                networkDevices: i
            });
        }

        $scope.componentSummary = [
            { name: 'Switches', icon: 'sitemap greenbg', color: 'green bigtext', count: '19' },
            { name: 'Load Balancers', icon: 'balance-scale yellowbg', color: 'yellow bigtext', count: '0' },
            { name: 'Virtual Machines', icon: 'object-group bluebg', color: 'blue bigtext', count: '0' },
            { name: 'Firewalls', icon: 'fire pinkbg', color: 'pink bigtext', count: '1' },
            { name: 'Servers / Hypervisors', icon: 'server redbg', color: 'red bigtext', count: '1' },
        ]

        $scope.cloudData = {
            "Name": 'Hyper-V Demo',
            "Datacenter": 'SF10',
            "Platform": 'Hyper-V',
            "Created": 'Dec 14, 2016 11:54:10 PM',
            "Updated": 'Apr 4, 2017 3:08:35 AM'
        }
        $scope.paddingtop = '';

    }

    // ProgressBar Function

    function progressBar() {

        $scope.percent = []

        for (var i = 0; i < $scope.cardBoxSummary.length; i++) {

            $scope.current = parseInt($scope.cardBoxSummary[i].availableCount);
            $scope.total = parseInt($scope.cardBoxSummary[i].totalCount);

            $scope.myCurrent = $scope.current / $scope.total * 100;
            $scope.myTotal = $scope.current / $scope.total * 100;

            $scope.percent.push($scope.myCurrent);
        }
    
    }


    $scope.showModal = function() {
        $uibModal.open({
                backdrop: true,
                backdropClick: true,
                dialogFade: false,
                keyboard: true,
                templateUrl: 'rest/app/client/views/alert-modal.html',
                controller: 'alert-modal',
            })
            .result.then(
                function() {
                    //alert("OK");
                },
                function() {
                    //alert("Cancel");
                }
            );
    }

})