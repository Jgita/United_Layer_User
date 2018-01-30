app.controller('public-AWS-loadBalancing', function($scope, $uibModal) {
    console.log('public-AWS-loadBalancing');

    $scope.headers = [{ name: 'Name' }, { name: 'Subnets' }, { name: 'Source Security Group' }, { name: 'Security Groups' }, { name: 'Created Time' }, { name: 'Availability Zones' }]

    $scope.loadBalancingData = [
        { name: 'abc', subnets: 't2.Micro', source: 'ubited', security: 'YES', createdTime: 'Jul 3, 2017 2:12:48 PM', availability: 'Yes' },
        { name: 'xyz', subnets: 't2.Micro', source: 'ubited', security: 'YES', createdTime: 'Jul 3, 2017 2:12:48 PM', availability: 'Yes' },
        { name: 'dfsd', subnets: 't2.Micro', source: 'ubited', security: 'YES', createdTime: 'Mar 23, 2017 2:50:48 PM', availability: 'Yes' },
        { name: 'hhds', subnets: 't2.Micro', source: 'ubited', security: 'YES', createdTime: 'Jul 3, 2017 2:12:48 PM', availability: 'Yes' },
        { name: 'abc', subnets: 't2.Micro', source: 'ubited', security: 'YES', createdTime: 'Jul 3, 2017 2:12:48 PM', availability: 'Yes' }
    ];

    $scope.showModal = function() {
        $uibModal.open({
                backdrop: true,
                backdropClick: true,
                dialogFade: false,
                keyboard: true,
                templateUrl: 'rest/app/client/views/AWS-instance-modal.html',
                controller: 'AWS-instance-modal',
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
});