app.controller('azure-editAccount-modal', function($scope, $uibModal, $uibModalInstance) {
    console.log('azure-editAccount-modal');
    $scope.ok = function() {
        $uibModalInstance.close();
    };

    $scope.cancel = function() {
        $uibModalInstance.dismiss('cancel');
    };

    // $timeout(function() {
    //     $uibModalInstance.close();
    // }, 5000)
});