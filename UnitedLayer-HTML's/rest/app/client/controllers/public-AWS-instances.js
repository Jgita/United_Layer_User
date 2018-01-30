app.controller('public-AWS-instances', function($scope, $uibModal, $rootScope) {
    console.log('public-AWS-instances')

    $scope.headers = [{ name: 'Instance ID' }, { name: 'Type' }, { name: 'Public IP' }, { name: 'State' }, { name: 'Launch Time' }]

    console.log('$rootScope.selectedRegion', $rootScope.selectedRegion)
    $scope.instancesData = [
        { id: 'i-25443455fd', type: 't2.Micro', publicIP: '154.45.90.123', state: 'Running', launchTime: 'Jul 3, 2017 2:12:48 PM' },
        { id: 'i-354f34g5fd', type: 't2.Micro', publicIP: '104.45.90.123', state: 'Running', launchTime: 'Jul 3, 2017 2:12:48 PM' },
        { id: 'i-4g443455fd', type: 't2.Micro', publicIP: '144.45.90.123', state: 'Running', launchTime: 'Mar 23, 2017 2:50:48 PM' },
        { id: 'i-75g43455fd', type: 't2.Micro', publicIP: '164.45.90.123', state: 'Running', launchTime: 'Jul 3, 2017 2:12:48 PM' },
        { id: 'i-66f5443455', type: 't2.Micro', publicIP: '155.45.90.123', state: 'Running', launchTime: 'Jul 3, 2017 2:12:48 PM' }
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