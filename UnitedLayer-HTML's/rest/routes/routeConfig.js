app.config(function($stateProvider, $urlRouterProvider) {

    // For Angular Sppiner
    // usSpinnerConfigProvider.setDefaults({ color: '#464d5a' });'
    $urlRouterProvider.otherwise('/home');
    $stateProvider
        .state('home', {
            url: '/home',
            templateUrl: 'rest/app/client/views/main-page.html',
            controller: 'child-controller'
        })

    // start breadcrumb routing

    .state('home.unitedSetup', {
            templateUrl: 'rest/app/client/views/united-setup.html',
            controller: 'united-setup-controller'
        })
        .state('home.tenantManagement', {
            templateUrl: 'rest/app/client/views/tenant-management.html',
            controller: 'tenant-management-controller'
        })
        .state('home.organizations', {
            templateUrl: 'rest/app/client/views/organizations.html',
            controller: 'organizations-controller'
        })
        .state('home.assets', {
            templateUrl: 'rest/app/client/views/assets.html',
            controller: 'assets-controller'
        })
        .state('home.server', {
            templateUrl: 'rest/app/client/views/server.html',
            controller: 'server-controller'
        })

    // end breadcrumb routing

    // start uib-tab organizations and users routing

    .state('home.server.users', {
        templateUrl: 'rest/app/client/components/users-content/users-content.html',
        controller: 'users-controller'
    })

    .state('home.server.organizations', {
        templateUrl: 'rest/app/client/components/organizations-content/organizations-content.html',
        controller: 'organizations-controller'
    })

    // end uib-tab organizations and users routing

    // start uib-tab company, assets, colo, opportunities routing

    .state('home.server.organizations.companyTab', {
            templateUrl: 'rest/app/client/views/company-tab.html',
            controller: 'companyTab-controller'
        })
        .state('home.server.organizations.assetsTab', {
            templateUrl: 'rest/app/client/views/assets-tab.html',
            controller: 'assetsTab-controller'
        })
        .state('home.server.organizations.coloTab', {
            templateUrl: 'rest/app/client/views/colo-tab.html',
            controller: 'coloTab-controller'
        })

    .state('home.server.organizations.opportunitiesTab', {
        templateUrl: 'rest/app/client/views/opportunities-tab.html',
        controller: 'opportunitiesTab-controller'
    })

    // end uib-tab company, assets, colo, opportunities routing

    // start uib-tab servers, virtual-machines, firewalls, Switches, load-balancers routing

    .state('home.server.organizations.companyTab.servers', {
            templateUrl: 'rest/app/client/views/company-servers.html',
            controller: 'companyServers-controller'
        })
        .state('home.server.organizations.companyTab.virtual-machines', {
            templateUrl: 'rest/app/client/views/company-virtual-machines.html',
            controller: 'companyVirtualMachines-controller'
        })
        .state('home.server.organizations.companyTab.firewalls', {
            templateUrl: 'rest/app/client/views/company-firewalls.html',
            controller: 'companyFirewalls-controller'
        })
        .state('home.server.organizations.companyTab.load-balancers', {
            templateUrl: 'rest/app/client/views/company-load-balancers.html',
            controller: 'companyLoadBalancers-controller'
        })
        .state('home.server.organizations.companyTab.switches', {
            templateUrl: 'rest/app/client/views/company-Switches.html',
            controller: 'companySwitches-controller'
        })

    // end uib-tab servers, virtual-machines, firewalls, Switches, load-balancers routing

    // start unitedCloud devices
    .state('home.unitedCloudDevices', {
        templateUrl: 'rest/app/client/components/unitedCloud-devices-content/unitedCloud-devices-content.html',
        controller: 'unitedCloud-devices-controller'
    })

    .state('home.unitedCloudDevices.firewalls', {
        templateUrl: 'rest/app/client/views/devices-firewalls.html',
        controller: 'devices-firewalls-controller'
    })

    .state('home.unitedCloudDevices.switches', {
        templateUrl: 'rest/app/client/views/devices-switches.html',
        controller: 'devices-switches-controller'
    })

    .state('home.unitedCloudDevices.load-balancers', {
        templateUrl: 'rest/app/client/views/devices-loadBalancers.html',
        controller: 'devices-loadBalancers-controller'
    })

    .state('home.unitedCloudDevices.hypervisors', {
        templateUrl: 'rest/app/client/views/devices-hypervisors.html',
        controller: 'devices-hypervisors-controller'
    })

    .state('home.unitedCloudDevices.virtual-machines', {
        templateUrl: 'rest/app/client/components/devices-virtualMachines-content/devices-virtualMachines-content.html',
        controller: 'devices-virtualMachines-controller'
    })

    //start uib-tabs under virtual Machines

    .state('home.unitedCloudDevices.virtual-machines.all-VMs', {
        templateUrl: 'rest/app/client/views/devices-virtualMachines-AllVMs.html',
        controller: 'devices-virtualMachines-allVMs'
    })

    .state('home.unitedCloudDevices.virtual-machines.OpenStack-VMs', {
        templateUrl: 'rest/app/client/views/devices-virtualMachines-openStack.html',
        controller: 'devices-virtualMachines-openStack'
    })

    .state('home.unitedCloudDevices.virtual-machines.VMware-VMs', {
        templateUrl: 'rest/app/client/views/devices-virtualMachines-VMware.html',
        controller: 'devices-virtualMachines-VMware'
    })

    .state('home.unitedCloudDevices.virtual-machines.AWS-VMs', {
        templateUrl: 'rest/app/client/views/devices-virtualMachines-AWS.html',
        controller: 'devices-virtualMachines-AWS'
    })

    .state('home.unitedCloudDevices.virtual-machines.Azure-VMs', {
        templateUrl: 'rest/app/client/views/devices-virtualMachines-Azure.html',
        controller: 'devices-virtualMachines-Azure'
    })

    //end uib-tabs under virtual Machines

    // start unitedCloud devices details page 

    .state('home.unitedCloudDevices.details', {
        templateUrl: 'rest/app/client/views/devices-details.html',
        controller: 'devices-details'
    })

    .state('home.unitedCloudDevices.hypervisors-proprtyDetails', {
        templateUrl: 'rest/app/client/views/devices-hypervisors-proprtyDetails.html',
        controller: 'devices-hypervisors-proprtyDetails'
    })

    // start unitedCloud Colo

    .state('home.unitedCloudColo', {
        templateUrl: 'rest/app/client/components/unitedCloud-colo-content/unitedCloud-colo-content.html',
        controller: 'unitedCloud-colo-controller'
    })

    .state('home.unitedCloudColo.cabinets', {
        templateUrl: 'rest/app/client/views/colo-cabinets.html',
        controller: 'colo-cabinets-controller'
    })

    .state('home.unitedCloudColo.PDUs', {
        templateUrl: 'rest/app/client/views/colo-PDUs.html',
        controller: 'colo-PDUs-controller'
    })

    .state('home.unitedCloudColo.cages', {
        templateUrl: 'rest/app/client/views/colo-cages.html',
        controller: 'colo-cages-controller'
    })

    .state('home.unitedCloudColo.details', {
        templateUrl: 'rest/app/client/views/colo-details.html',
        controller: 'colo-details'
    })

    //start unitedCloud private
    .state('home.unitedCloudPrivate', {
        templateUrl: 'rest/app/client/components/unitedCloud-private-content/unitedCloud-private-content.html',
        controller: 'unitedCloud-private-controller'
    })

    .state('home.unitedCloudPrivate.VMware', {
        templateUrl: 'rest/app/client/views/private-VMware.html',
        controller: 'private-VMware-controller'
    })

    .state('home.unitedCloudPrivate.OpenStack', {
        templateUrl: 'rest/app/client/views/private-OpenStack.html',
        controller: 'private-OpenStack-controller'
    })

    .state('home.unitedCloudPrivate.HyperV', {
        templateUrl: 'rest/app/client/views/private-HyperV.html',
        controller: 'private-HyperV-controller'
    })

    //start uib-tabs under VMware
    .state('home.unitedCloudPrivate.VMware.summary', {
        templateUrl: 'rest/app/client/views/private-summary.html',
        controller: 'private-summary'
    })

    .state('home.unitedCloudPrivate.OpenStack.summary', {
        templateUrl: 'rest/app/client/views/private-summary.html',
        controller: 'private-summary'
    })

    .state('home.unitedCloudPrivate.VMware.hypervisors', {
        templateUrl: 'rest/app/client/views/private-hypervisors.html',
        controller: 'private-hypervisors'
    })

    .state('home.unitedCloudPrivate.OpenStack.hypervisors', {
        templateUrl: 'rest/app/client/views/private-hypervisors.html',
        controller: 'private-hypervisors'
    })

    .state('home.unitedCloudPrivate.HyperV.summary', {
        templateUrl: 'rest/app/client/views/private-summary.html',
        controller: 'private-summary'
    })

    .state('home.unitedCloudPrivate.HyperV.hypervisors', {
        templateUrl: 'rest/app/client/views/private-hypervisors.html',
        controller: 'private-hypervisors'
    })

    .state('home.unitedCloudPrivate.details', {
        templateUrl: 'rest/app/client/views/private-summery-details.html',
        controller: 'private-summery-details'
    })

    // .state('home.unitedCloudPrivate.VMware.summary.details', {
    //     templateUrl: 'rest/app/client/views/devices-virtualMachines-VMware.html',
    //     controller: 'devices-virtualMachines-VMware'
    // })

    // start unitedCloud public
    .state('home.unitedCloudPublic', {
        templateUrl: 'rest/app/client/components/unitedCloud-public-content/unitedCloud-public-content.html',
        controller: 'unitedCloud-public-controller'
    })

    .state('home.unitedCloudPublic.AWS', {
        templateUrl: 'rest/app/client/views/public-AWS.html',
        controller: 'public-AWS-controller'
    })

    .state('home.unitedCloudPublic.Azure', {
        templateUrl: 'rest/app/client/views/public-Azure.html',
        controller: 'public-Azure-controller'
    })

    .state('home.unitedCloudPublic.details', {
        templateUrl: 'rest/app/client/components/public-AWS-details/public-AWS-details.html',
        controller: 'public-AWS-details'
    })

    //start uib-tabs AWS details

    .state('home.unitedCloudPublic.details.instances', {
            templateUrl: 'rest/app/client/views/public-AWS-instances.html',
            controller: 'public-AWS-instances'
        })
        .state('home.unitedCloudPublic.details.ElasticBlock', {
            templateUrl: 'rest/app/client/views/public-AWS-ElasticBlock.html',
            controller: 'public-AWS-ElasticBlock'
        })

    .state('home.unitedCloudPublic.details.Network', {
            templateUrl: 'rest/app/client/views/public-AWS-Network.html',
            controller: 'public-AWS-Network'
        })
        .state('home.unitedCloudPublic.details.loadBalancing', {
            templateUrl: 'rest/app/client/views/public-AWS-loadBalancing.html',
            controller: 'public-AWS-loadBalancing'
        })
        .state('home.unitedCloudPublic.details.autoScaling', {
            templateUrl: 'rest/app/client/views/public-AWS-autoScaling.html',
            controller: 'public-AWS-autoScaling'
        })

    // start uib-tabs AWS virtualDetails 
    .state('home.unitedCloudPublic.virtualDetails', {
        templateUrl: 'rest/app/client/views/public-AWS-virtualDetails.html',
        controller: 'public-AWS-virtualDetails'
    })

    // start uib-tabs Azure details
    .state('home.unitedCloudPublic.azureDetails', {
        templateUrl: 'rest/app/client/views/azure-resource-group.html',
        controller: 'azure-resource-group'
    })

    // United View customer DashBoard
    .state('home.unitedViewDashboard', {
        templateUrl: 'rest/app/client/views/customer-dashboard.html',
        controller: 'customer-dashboard-controller'
    })

    // United view Activity Log
    .state('home.activityLog', {
        templateUrl: 'rest/app/client/views/activity-log.html',
        controller: 'activity-log-controller'
    })

    // calender
    .state('home.eventsInfo', {
        templateUrl: 'rest/app/client/views/events-info.html',
        controller: 'events-info'
    })

    // Profile Settings
    .state('home.profile', {
        templateUrl: 'rest/app/client/views/profile-settings.html',
        controller: 'profile-settings'
    })

    // change-management
    .state('home.changeManagement', {
            templateUrl: 'rest/app/client/views/change-management.html',
            controller: 'change-management'
        })
        .state('home.changeManagementDetails', {
            templateUrl: 'rest/app/client/views/change-management-details.html',
            controller: 'change-management-details'
        })

    // Support Requests
    .state('home.supportRequests', {
        templateUrl: 'rest/app/client/views/support-requests.html',
        controller: 'support-requests'
    })

    // Maintenance
    .state('home.maintenance', {
        templateUrl: 'rest/app/client/views/maintenance.html',
        controller: 'maintenance'
    })

    //system-monitoring
    .state('home.systemMonitoring', {
        templateUrl: 'rest/app/client/views/system-monitoring.html',
        controller: 'system-monitoring'
    })

});