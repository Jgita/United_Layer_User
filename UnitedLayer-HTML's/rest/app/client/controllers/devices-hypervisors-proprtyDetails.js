app.controller('devices-hypervisors-proprtyDetails', function($scope, $rootScope) {
    console.log('devices-hypervisors-proprtyDetails');
    console.log('apiDtaa', $rootScope.apiData)
    $scope.detalis = {
        "Instance Name": 'sdasdk_5',
        "Instance Type": 'xyz_5',
        "Operating System": 'ESXi_0',
        "Operating System Version": 'Manageable_' + i,
        "State": 'sdasdk_5'
    }

    // $scope.$on('details', function(event, args) {

    //     //API call Getdetails(args)
    //     //Return object is like

    //     $scope.detalis = {
    //         "Instance Name": 'args',
    //         "Instance Type": 'abc_' + i,
    //         "Operating System": 'modal',
    //         "Operating System Version": 'Manageable_' + i,
    //         "State": 'Manageable_' + i
    //     }
    //     $rootScope.apiData = $scope.detalis;
    // });

})