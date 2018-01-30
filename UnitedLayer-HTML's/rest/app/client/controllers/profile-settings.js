app.controller('profile-settings', function($scope, $uibModal) {
    console.log('profile-settings')

    $scope.roles = [{ role: 'Role Description 1' }, { role: 'Role Description 2' }];
    $scope.groups = [{ group: 'Group name 1' }, { group: 'Group name 1' }];
    $scope.headers = [{ name: 'Access Type' }, { name: 'Description' }]
    $scope.grantedAccess = [{ type: 'Portal Access', description: 'Allows access to portal' }, { type: 'Portal Access', description: 'Allows access to portal' }];

    $scope.contactInfo = 'demo_user@unitedlayer.com';
    $scope.lastLogin = 'Sep 28, 2017 3:12:43 PM'

    // modal for Change Password
    $scope.changePasswordModal = function() {
        $uibModal.open({
                backdrop: true,
                backdropClick: true,
                dialogFade: false,
                keyboard: true,
                templateUrl: 'rest/app/client/views/change-Password-modal.html',
                controller: 'change-Password-modal',
            })
            .result.then(
                function() {},
                function() {}
            );
    }
});