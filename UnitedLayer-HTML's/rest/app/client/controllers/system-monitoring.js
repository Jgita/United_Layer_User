app.controller('system-monitoring', function($scope) {
    console.log('system-monitoring');

    $scope.dropDownList = ['VM Memory Usage', 'VM CPU Usage', 'Union City Network Ping Average', 'Sylmar Network Ping Average', 'Santa Fe Springs Network Ping Average', 'San Francisco Network Ping Average', 'Redlands Network Ping Average', 'Pheonix Network Ping Average', 'Networking and Infrastructure Alerts', 'Host CPU', 'Corona Network Ping Average'];

    $scope.widgetList = [{ name: 'Memory Unity Alpha Compute', paddingStyle: 'paddingright' }, { name: 'CPU Utilization', paddingStyle: 'paddingleft paddingright' }, { name: 'CPU Utilization', paddingStyle: 'paddingleft' }];
});