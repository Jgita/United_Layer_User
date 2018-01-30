app.controller('ModalDialogController', function($scope, $uibModalInstance, $timeout) {
    $scope.ok = function() {
        $uibModalInstance.close();
    };

    $scope.cancel = function() {
        $uibModalInstance.dismiss('cancel');
    };

    $scope.regions = [{ id: '0', name: 'US West (N. California)' }, { id: '1', name: 'Asia Pacific (Sydney)' }];

    // $timeout(function() {
    //     $uibModalInstance.close();
    // }, 5000)
});