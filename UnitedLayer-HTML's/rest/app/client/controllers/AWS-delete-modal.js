app.controller('AWS-delete-modal', function($scope, $uibModalInstance, $timeout) {
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