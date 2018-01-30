app.controller('public-Azure-controller', function($scope, $uibModal) {
    console.log('public-Azure-controller');
    $scope.headers = [{ name: 'Account Name' }, { name: 'Subscription Id' }, { name: 'Actions' }]
    $scope.azureAccounts = [{ name: 'UnitedLayer Azure', subscriptionID: '632a4dac-13b7-4f36-b98e-fc362a18a7ea' }];

    $scope.AWSAccountsDetails = function(item, selectedRegion) {
        console.log('routing item', item, selectedRegion)
            // $rootScope.$broadcast('details', item);
    };
    // modal for +Add Account
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

    $scope.editModal = function() {
        $uibModal.open({
                backdrop: true,
                backdropClick: true,
                dialogFade: false,
                keyboard: true,
                templateUrl: 'rest/app/client/views/azure-editAccount-modal.html',
                controller: 'azure-editAccount-modal',
            })
            .result.then(
                function() {},
                function() {}
            );
    }

    $scope.deleteModal = function() {
        $uibModal.open({
                backdrop: true,
                backdropClick: true,
                dialogFade: false,
                keyboard: true,
                templateUrl: 'rest/app/client/views/AWS-delete-modal.html',
                controller: 'AWS-delete-modal',
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