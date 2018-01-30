app.controller('devices-switches-controller', function($scope, $rootScope) {
    console.log('devices-switches-controller');
    $scope.items = [];
    $scope.name = 'switchs';
    for (i = 0; i < 7; ++i) {
        $scope.items.push({
            name: 'sw_' + i,
            modal: 'sw_' + i,
            type: 'Jsw_' + i,
            manageStatus: 'Manageable_' + i

        });
    }
    $scope.$on('details', function(event, args) {
        console.log('event', args);
        //API call Getdetails(args)
        //Return object is like

        $scope.detalis = {
            "Name": args.name,
            "Manufacturer": 'cisco_' + i,
            "Modal": args.modal
        }
        $rootScope.apiData = $scope.detalis;
    });
});