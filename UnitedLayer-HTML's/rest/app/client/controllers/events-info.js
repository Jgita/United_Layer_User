app.controller('events-info', function($scope, $state, $rootScope) {
    console.log('events-info-controller');
    // $scope.$on('eventName', function(event, args) {
    //     console.log('broad  eventName >>', args)
    // });

    $scope.eventInfo = $rootScope.eventDetails;
})

// app.factory('alert', function($uibModal) {

//     function show(action, event) {
//         return $uibModal.open({
//             templateUrl: 'rest/app/client/views/events-info.html',
//             controller: function() {
//                 var vm = this;
//                 vm.action = action;
//                 vm.event = event;
//             },
//             controllerAs: 'vm'
//         });
//     }

//     return {
//         show: show
//     };

// });