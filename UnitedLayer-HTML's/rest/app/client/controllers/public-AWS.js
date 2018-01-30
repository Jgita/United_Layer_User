app.controller('public-AWS-controller', function($scope, $uibModal, $rootScope, $state) {
    console.log('public-AWS-controller');

    $scope.headers = [{ name: 'Name' }, { name: 'Regions' }, { name: 'Actions' }]
    $scope.AWSAccounts = [{ name: 'UnitedLayer AWS', regions: [{ id: '0', name: 'US West (N. California)' }, { id: '1', name: 'Asia Pacific (Sydney)' }] }];

    $scope.AWSAccountsDetails = function(item, selectedRegion) {
        console.log('routing item', item, selectedRegion)
            // $rootScope.$broadcast('details', item);
        if (selectedRegion != undefined) {
            $state.transitionTo('home.unitedCloudPublic.details.instances')
        } else {
            alert('Please Select a Region');
        }
        $rootScope.selectedRegion = selectedRegion;
    };

    $scope.AWSVirtualDetails = function(item, selectedRegion) {
        if (selectedRegion != undefined) {
            $state.transitionTo('home.unitedCloudPublic.virtualDetails')
        } else {
            alert('Please Select a Region');
        }
        $rootScope.selectedRegion = selectedRegion;
    };

    // modal for +Add Account
    $scope.showModal = function() {
        $uibModal.open({
                backdrop: true,
                backdropClick: true,
                dialogFade: false,
                keyboard: true,
                templateUrl: 'rest/app/client/views/add-account-modal.html',
                controller: 'ModalDialogController',
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

    $scope.addRegionModal = function() {
        $uibModal.open({
                backdrop: true,
                backdropClick: true,
                dialogFade: false,
                keyboard: true,
                templateUrl: 'rest/app/client/views/AWS-addRegion-modal.html',
                controller: 'AWS-addRegion-modal',
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
                function() {},
                function() {}
            );
    }

});