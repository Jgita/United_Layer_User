app.controller('public-AWS-autoScaling', function($scope, $uibModal) {
    console.log('public-AWS-autoScaling');
    $scope.headers = [{ name: 'Name' }, { name: 'Instances' }, { name: 'Availability Zone' }, { name: 'Min Size' }, { name: 'Max Size' }, { name: 'Desired Capacity' }]

    $scope.autoScalingData = [
        { name: 'i-25443', instances: 't2.Micro', availability: 'YES', minSize: '120', maxSize: '300', capacity: '500' },
        { name: 'i-354f3', instances: 't2.Micro', availability: 'YES', minSize: '120', maxSize: '300', capacity: '500' },
        { name: 'i-4g443', instances: 't2.Micro', availability: 'YES', minSize: '120', maxSize: '300', capacity: '500' },
        { name: 'i-75g43', instances: 't2.Micro', availability: 'YES', minSize: '120', maxSize: '300', capacity: '500' },
        { name: 'i-66f54', instances: 't2.Micro', availability: 'YES', minSize: '120', maxSize: '300', capacity: '500' }
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