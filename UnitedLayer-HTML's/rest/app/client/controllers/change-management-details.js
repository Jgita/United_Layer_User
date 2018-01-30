app.controller('change-management-details', function($scope, $rootScope) {
    console.log('change-management-details')
        // $scope.$on('ticketes', function(event, args) {
        //     console.log('args', args)     
        // });
    $scope.ticketDetailsInfo = [];

    $scope.ticketDetailsInfo.push({
        subject: $rootScope.ticketInfo.subject,
        updatedOn: $rootScope.ticketInfo.updatedOn,
        description: $rootScope.ticketInfo.description,
        createdAt: moment().format('lll'),
        createdVia: 'api'
    });

    $scope.commentsCount = 0;
    $scope.comments = [];

    $scope.btn_post = function() {
        // create a new time variable with the current date
        $scope.time = moment().format('lll');
        console.log('$scope.cmtName', $scope.cmtName)
        if ($scope.cmtName != '') {
            $scope.comments.push({
                cmtSection: $scope.cmtName,
                users: 'User_' + $scope.commentsCount,
                time: $scope.time
            });
            $scope.cmtName = "";
        }
        $scope.commentsCount = $scope.comments.length;
    }
});