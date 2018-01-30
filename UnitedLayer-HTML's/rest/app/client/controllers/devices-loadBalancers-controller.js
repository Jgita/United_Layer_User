app.controller('devices-loadBalancers-controller', function($scope, $rootScope) {
    console.log('devices-loadBalancers-controller');
    $scope.items = [];
    $scope.name = 'loadBalancers';
    for (i = 0; i < 10; ++i) {
        $scope.items.push({
            name: 'lb_' + i,
            modal: 'lb_' + i,
            type: 'lb_' + i,
            manageStatus: 'lb_' + i

        });
    }
    $scope.$on('details', function(event, args) {
        //API call Getdetails(args)
        //Return object is like

        $scope.detalis = {
            "Name": args.name,
            "Manufacturer": 'cisco_' + i,
            "Modal": args.modal,
            "Manage Status": args.manageStatus,

        }

        $rootScope.apiData = $scope.detalis;
    });
})