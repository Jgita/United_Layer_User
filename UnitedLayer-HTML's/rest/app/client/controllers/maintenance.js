app.controller('maintenance', function($scope, $uibModal) {

    // modal for +Add Account
    $scope.showMaintenanceModal = function() {
        $uibModal.open({
                backdrop: true,
                backdropClick: true,
                dialogFade: false,
                keyboard: true,
                templateUrl: 'rest/app/client/views/add-maintenance-modal.html',
                controller: 'add-maintenance-modal',
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