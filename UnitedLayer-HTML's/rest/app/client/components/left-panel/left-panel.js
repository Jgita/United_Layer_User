app.directive('leftPanel', function($timeout) {
    return {
        restrict: "E",
        templateUrl: 'rest/app/client/components/left-panel/left-panel.html',
        link: function($scope, $elem, $attr) {
            console.log('left-panel');

            $scope.oneAtATime = true;

            $scope.open = [];
            angular.element('#content-area').sidebar();

            $scope.groups = [{
                    title: { name: 'United View', icon: 'fa fa-home' },
                    items: [
                        { name: 'Dashboard', icon: 'fa fa-dashboard', route: 'home.unitedViewDashboard' },
                        { name: 'System Monitoring', icon: 'fa fa-heartbeat', route: 'home.systemMonitoring' },
                        { name: 'Activity Log', icon: 'fa fa-list', route: 'home.activityLog' }
                    ],
                    open: false
                },
                {
                    title: { name: 'United Cloud', icon: 'fa fa-cloud' },
                    items: [{ name: 'Private Cloud', icon: 'fa fa-cloud', route: 'home.unitedCloudPrivate.VMware.summary' },
                        { name: 'Public Cloud', icon: 'fa fa-rocket', route: 'home.unitedCloudPublic.AWS' },
                        { name: 'Devices', icon: 'fa fa-list-ul', route: 'home.unitedCloudDevices.firewalls' },
                        { name: 'IP Management', icon: 'fa fa-sitemap', route: '' },
                        { name: 'Colo', icon: 'fa fa-building', route: 'home.unitedCloudColo.cabinets' },
                        { name: 'UnitedConnect', icon: 'fa fa-cloud', route: '' }
                    ],
                    open: false
                },
                {
                    title: { name: 'United Services', icon: 'fa fa-rocket' },
                    items: [{ name: 'DevOps-as-a-Service', icon: 'fa fa-gears', route: '' }],
                    open: false
                },
                {
                    title: { name: 'Support', icon: 'fa fa-support' },
                    items: [{ name: 'Support Requests', icon: 'fa fa-question-circle', route: 'home.supportRequests' },
                        { name: 'Change Management', icon: 'fa fa-columns', route: 'home.changeManagement' },
                        { name: 'Incident Management', icon: 'fa fa-tags', route: '' },
                        { name: 'Maintenance', icon: 'fa fa-calendar', route: 'home.maintenance' }
                    ],
                    open: false
                },
                {
                    title: { name: 'United Setup', icon: 'fa fa-wrench' },
                    items: [{ name: 'Tenant Management', icon: 'fa fa-user', route: '' },
                        { name: 'Billing & Invoicing', icon: 'fa fa-credit-card', route: '' },
                        { name: 'Customer Integrations', icon: 'fa fa-exchange', route: '' },
                        { name: 'Server Components', icon: 'fa fa-briefcase', route: '' },
                        { name: 'Cloud Setup', icon: 'fa fa-cloud', route: '' },
                        { name: 'Supported Hardware', icon: 'fa fa-cog', route: '' },
                        { name: 'Facilities Config', icon: 'fa fa-globe', route: '' },
                        { name: 'IP Config', icon: 'fa fa-wrench', route: '' },
                        { name: 'Logic Monitor', icon: 'fa fa-area-chart', route: '' },
                        { name: 'Advanced', icon: 'fa fa-rocket', route: '' }
                    ],
                    open: false
                },
            ];

            // $scope.toggle = function() {
            //     $scope.open = [];
            //     var toggleMinimized = angular.element('#content-area')["0"].classList[2]

            //     if (toggleMinimized != 'minimized') {

            //         angular.element('#arrow').removeClass('fa fa-chevron-left').addClass('fa fa-chevron-right');
            //         $scope.isTrue = true;
                
            //          angular.element('.first-level li').css({'padding':'0 0 0 35px'})
                    
            //          $scope.iconClick = function(){
            //              angular.element('.first-level li').css({'padding':'0 0 0 10px'})

            //          }
                     
            //     } else {
                    
            //         angular.element('#arrow').removeClass('fa fa-chevron-right').addClass('fa fa-chevron-left');
            //         angular.element('.first-level li').css({'padding':'0 0 0 35px'})
                     
            //          $scope.iconClick = function(){
            //              angular.element('.first-level li').css({'padding':'0 0 0 35px'})
            //          }
            //         $timeout(function() {
            //             $scope.isTrue = false;
            //         }, 180);
            //     }

            // }

              $scope.toggle = function() {
                $scope.open = [];
                var toggleMinimized = angular.element('#content-area')["0"].classList[2]

                if (toggleMinimized != 'minimized') {
                    angular.element('#arrow').removeClass('fa fa-chevron-left').addClass('fa fa-chevron-right');
                    $scope.isTrue = true;

                     $scope.iconClick = function(){
                        angular.element('#content-area').removeClass('minimized').addClass('minimized animating');
                       // angular.element('#content-area').removeClass('minimized');
                        angular.element('.faIcon').removeClass('ng-hide');   
                        angular.element('#arrow').removeClass('fa fa-chevron-right').addClass('fa fa-chevron-left');
                     }
                     angular.element('.faIcon').addClass('ng-hide');   
                } else {
                    angular.element('#arrow').removeClass('fa fa-chevron-right').addClass('fa fa-chevron-left');
                    $timeout(function() {
                        $scope.isTrue = false;
                    }, 180);
                }
            }

            // overriding defaults per scrollbar
            $scope.scrollbarConfig = {
                theme: 'light-3',
                scrollInertia: 500,
                autoHideScrollbar: false,
                setHeight: '90%',
                axis: 'y',
                advanced: {
                    updateOnContentResize: true
                },
                scrollButtons: {
                    scrollAmount: 'auto', // scroll amount when button pressed
                    enable: true // enable scrolling buttons by default
                }
            }
        }
    }
})