app.controller('activity-log-controller', function($scope, $filter) {
    console.log('activity-log-controller');

    $scope.date = {
        startDate: moment().subtract(0, "days"),
        endDate: moment()
    };

    $scope.today = moment()._d;
    $scope.options = {
        "autoApply": true,
        isInvalidDate: true,
        locale: {
            format: "D MMM YYYY",
        }
    }
});