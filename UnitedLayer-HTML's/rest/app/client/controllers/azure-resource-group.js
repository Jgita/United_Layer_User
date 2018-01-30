app.controller('azure-resource-group', function($scope, $uibModal, $rootScope) {
    console.log('azure-resource-group');
    $scope.azureAccountModal = function() {
        $uibModal.open({
                backdrop: true,
                backdropClick: true,
                dialogFade: false,
                keyboard: true,
                templateUrl: 'rest/app/client/views/azure-account-modal.html',
                controller: 'azure-account-modal',
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