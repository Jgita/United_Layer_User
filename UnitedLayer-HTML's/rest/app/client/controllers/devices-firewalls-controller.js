app.controller('devices-firewalls-controller', function($scope, $rootScope) {
    console.log('devices-firewalls-controller');
    $scope.items = [];
    $scope.name = 'firewall';

    for (i = 0; i < 4; ++i) {
        $scope.items.push({
            name: 'xyz_' + i,
            modal: 'abc_' + i,
            type: 'Juniper_' + i,
            manageStatus: 'Manageable_' + i

        });
    }

    $scope.$on('details', function(event, args) {

        //API call Getdetails(args)
        //Return object is like

        $scope.detalis = {
            "Name": args.name,
            "Asset Tag": 'abc_' + i,
            "Modal": args.modal,
            "Cabinet": 'Manageable_' + i,
            "Serial Number": 'Manageable_' + i,
            "Salesforce ID": '123' + i

        }
        $rootScope.apiData = $scope.detalis;
    });

});