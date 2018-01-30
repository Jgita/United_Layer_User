app.controller('AWS-instance-modal', function($scope, $uibModalInstance, $timeout) {
    $scope.ok = function() {
        $uibModalInstance.close();
    };

    $scope.cancel = function() {
        $uibModalInstance.dismiss('cancel');
    };

    $scope.images = [{ id: '0', name: 'Image 1' }, { id: '1', name: 'Image 2' }];
    $scope.instanceType = [{ id: '0', name: 'Instance 1' }, { id: '1', name: 'Instance 2' }];
    $scope.availability = [{ id: '0', name: 'US-WA 1' }, { id: '1', name: 'US-WA 2' }];
    $scope.shutdownBehavior = [{ id: '0', name: 'Stop' }, { id: '1', name: 'Terminate' }];

    // $timeout(function() {
    //     $uibModalInstance.close();
    // }, 5000)

});