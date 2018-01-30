app.controller('add-maintenance-modal', function($scope, $uibModalInstance, $timeout, $filter) {
    $scope.ok = function() {
        $uibModalInstance.close();
    };

    $scope.cancel = function() {
        $uibModalInstance.dismiss('cancel');
    };

    // $timeout(function() {
    //     $uibModalInstance.close();
    // }, 5000)

    $scope.endDateBeforeRender = endDateBeforeRender;
    $scope.endDateOnSetTime = endDateOnSetTime;
    $scope.startDateBeforeRender = startDateBeforeRender;
    $scope.startDateOnSetTime = startDateOnSetTime;

    function startDateOnSetTime(newDate, oldDate) {
        $scope.$broadcast('start-date-changed');
    }

    function endDateOnSetTime(newDate, oldDate) {
        $scope.$broadcast('end-date-changed');
    }

    function startDateBeforeRender($view, $dates) {
        const todaySinceMidnight = new Date();
        todaySinceMidnight.setUTCHours(0, 0, 0, 0);
        $dates.filter(function(date) {
            return date.utcDateValue < todaySinceMidnight.getTime();
        }).forEach(function(date) {
            date.selectable = false;
        });

        if ($scope.dateRangeEnd) {
            var activeDate = moment($scope.dateRangeEnd);
            $dates.filter(function(date) {
                return date.localDateValue() >= activeDate.valueOf();
            }).forEach(function(date) {
                date.selectable = false;
            })
        }
    }

    function endDateBeforeRender($view, $dates) {
        if ($scope.dateRangeStart) {
            var activeDate = moment($scope.dateRangeStart).subtract(1, $view).add(1, 'minute');

            $dates.filter(function(date) {
                return date.localDateValue() <= activeDate.valueOf()
            }).forEach(function(date) {
                date.selectable = false;
            })
        }
    }
});