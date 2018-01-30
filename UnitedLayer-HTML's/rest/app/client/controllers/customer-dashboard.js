app.controller('customer-dashboard-controller', function($scope, $http, $state, calendarHelper, $rootScope, calendarEventTitle, $timeout, moment, calendarConfig) {
    console.log('companyTab-controller');

    // Infrastructure as a service
    $scope.privateCloud = [
        {
            name: 'VMware',
            classStyle: 'paddingright',
            classTop: '',
            dataCenter: 14,
            virtualMachines: 10,
            alerts: 14,
            progressValue: [70, 65, 50],
            utilization: {
                type: 'doughnutLabels',
                data: {
                    datasets: [{
                        data: [
                            75,
                            25,
                        ],
                        backgroundColor: [
                            "#43e091",
                            "#bcbcbc"
                        ]
                    }],
                    labels: [
                        "Used",
                        "Unused"
                    ]
                },
                options: {
                    rotation: 1.0 * Math.PI,
                    circumference: Math.PI,
                    responsive: true,
                    legend: {
                        display: false,
                    },

                    animation: {
                        animateScale: true,
                        animateRotate: true
                    }
                    // tooltips: { bodyFontSize: 20 }
                }
            },
            utilization1: {
                type: 'doughnutLabels',

                data: {
                    datasets: [{
                        data: [69, 31],
                        backgroundColor: [
                            "#43e091",
                            "#bcbcbc"
                        ]
                    }],
                    labels: [
                        "Used",
                        "Unused"
                    ]
                },
                options: {
                    rotation: 1.0 * Math.PI,
                    circumference: Math.PI,
                    responsive: true,
                    legend: {
                        display: false,
                    },

                    animation: {
                        animateScale: true,
                        animateRotate: true
                    }
                    // tooltips: { bodyFontSize: 20 }
                }
            }
        },
        {
            name: 'OpenStack',
            classStyle: 'paddingright paddingleft',
            classTop: 'middlec',
            dataCenter: 10,
            virtualMachines: 12,
            alerts: 12,
            progressValue: [50, 80, 60],
            utilization: {
                type: 'doughnutLabels',

                data: {
                    datasets: [{
                        data: [80, 20],
                        backgroundColor: [
                            "#43e091",
                            "#bcbcbc"
                        ]
                    }],
                    labels: [
                        "Used",
                        "Unused"
                    ]
                },
                options: {
                    rotation: 1.0 * Math.PI,
                    circumference: Math.PI,
                    responsive: true,
                    legend: {
                        display: false,
                    },

                    animation: {
                        animateScale: true,
                        animateRotate: true
                    }
                    // tooltips: { bodyFontSize: 20 }
                }
            },
            utilization1: {
                type: 'doughnutLabels',

                data: {
                    datasets: [{
                        data: [55, 65],
                        backgroundColor: [
                            "#43e091",
                            "#bcbcbc"
                        ]
                    }],
                    labels: [
                        "Used",
                        "Unused"
                    ]
                },
                options: {
                    rotation: 1.0 * Math.PI,
                    circumference: Math.PI,
                    responsive: true,
                    legend: {
                        display: false,
                    },

                    animation: {
                        animateScale: true,
                        animateRotate: true
                    }
                    // tooltips: { bodyFontSize: 20 }
                }
            }
        },
        {
            name: 'Hyper-V',
            classStyle: 'paddingleft',
            classTop: '',
            dataCenter: 18,
            virtualMachines: '0' + 7,
            alerts: 15,
            progressValue: [60, 75, 90],
            utilization: {
                type: 'doughnutLabels',

                data: {
                    datasets: [{
                        data: [75, 25],
                        backgroundColor: [
                            "#43e091",
                            "#bcbcbc"
                        ]
                    }],
                    labels: [
                        "Used",
                        "Unused"
                    ]
                },
                options: {
                    rotation: 1.0 * Math.PI,
                    circumference: Math.PI,
                    responsive: true,
                    legend: {
                        display: false,
                    },

                    animation: {
                        animateScale: true,
                        animateRotate: true
                    }
                    // tooltips: { bodyFontSize: 20 }
                }
            },
            utilization1: {
                type: 'doughnutLabels',

                data: {
                    datasets: [{
                        data: [60, 40],
                        backgroundColor: [
                            "#43e091",
                            "#bcbcbc"
                        ]
                    }],
                    labels: [
                        "Used",
                        "Unused"
                    ]
                },
                options: {
                    rotation: 1.0 * Math.PI,
                    circumference: Math.PI,
                    responsive: true,
                    legend: {
                        display: false,
                    },

                    animation: {
                        animateScale: true,
                        animateRotate: true
                    }
                    // tooltips: { bodyFontSize: 20 }
                }
            }
        }
    ]

    $scope.myPromise = $http.get('http://httpbin.org/delay/3');

    // if private Cloud have two widget
    if ($scope.privateCloud.length == 2) {
        $scope.colStyle = 'col-xs-6 col-sm-6 col-md-6 col-lg-6'
        $scope.privateCloud[1].classTop = '';
        $scope.privateCloud[1].classStyle = 'paddingleft';
    } else {
        $scope.colStyle = 'col-xs-4 col-sm-4 col-md-4 col-lg-4'
    }

    $scope.progressBar = [
        { type: 'danger', core: 10, cloudName: 'CPU', unit: 'Core' },
        { type: 'success', core: 128, cloudName: 'RAM', unit: 'GB' },
        { type: 'warning', core: 300, cloudName: 'Storage', unit: 'GB' }
    ]

    $scope.publicCloud = [{
            name: 'AWS',
            classStyle: 'paddingright',
            S3Buckets: 90,
            elasticIPs: 12,
            RDSInstances: 10,
            loadBalancer: 22,
            instances: 'EC2 Instances',
            utilization: {
                type: 'doughnutLabels',

                data: {
                    datasets: [{
                        data: [70, 20],
                        backgroundColor: [
                            "#ad7fe9",
                            "#bcbcbc"
                        ]
                    }],
                    labels: [
                        "Running",
                        "Stopped"
                    ]
                },
                options: {

                    rotation: 1.0 * Math.PI,
                    circumference: Math.PI,

                    responsive: true,
                    legend: {
                        display: false,
                    },
                    animation: {
                        animateScale: true,
                        animateRotate: true
                    }

                }
            },

        },
        {
            name: 'Azure',
            classStyle: 'paddingleft',
            S3Buckets: 82,
            elasticIPs: 14,
            RDSInstances: 10,
            loadBalancer: 18,
            instances: 'EC2 Instances',
            utilization: {
                type: 'doughnutLabels',
                data: {
                    datasets: [{

                        data: [60, 20],
                        backgroundColor: [
                            "#ad7fe9",
                            "#bcbcbc"
                        ]
                    }],
                    labels: [
                        "Running",
                        "Stopped"
                    ]
                },
                options: {

                    rotation: 1.0 * Math.PI,
                    circumference: Math.PI,

                    responsive: true,
                    legend: {
                        display: false,
                    },
                    animation: {
                        animateScale: true,
                        animateRotate: true
                    }

                }
            },

        }

    ]

    $scope.publicIntancesCount = [
        $scope.publicCloud["0"].utilization.data.datasets["0"].data["0"] + $scope.publicCloud["0"].utilization.data.datasets["0"].data["1"],
        $scope.publicCloud["1"].utilization.data.datasets["0"].data["0"] + $scope.publicCloud["1"].utilization.data.datasets["0"].data["1"]
    ];

    //colo assets
    $scope.serversStacked = [{ value: 5, type: 'warning' }, { value: 7, type: 'danger' }];
    $scope.SANsStacked = [{ value: 10, type: 'warning' }, { value: 11, type: 'danger' }];
    $scope.firewallsStacked = [{ value: 10, type: 'warning' }, { value: 5, type: 'danger' }];
    $scope.switchStacked = [{ value: 5, type: 'warning' }, { value: 8, type: 'danger' }];
    $scope.VMStacked = [{ value: 9, type: 'warning' }, { value: 10, type: 'danger' }];
    $scope.loadBalancerStacked = [{ value: 12, type: 'warning' }, { value: 7, type: 'danger' }];

    $scope.totalServers = $scope.serversStacked[0].value + $scope.serversStacked[1].value;
    $scope.totalSANs = $scope.SANsStacked[0].value + $scope.SANsStacked[1].value;
    $scope.totalFirewalls = $scope.firewallsStacked[0].value + $scope.firewallsStacked[1].value;
    $scope.totalSwitch = $scope.switchStacked[0].value + $scope.switchStacked[1].value;
    $scope.totalVM = $scope.VMStacked[0].value + $scope.VMStacked[1].value;
    $scope.totalLoadBalancer = $scope.loadBalancerStacked[0].value + $scope.loadBalancerStacked[1].value;

    // Application-Monitoring-as-a-Service
    $scope.applicationMonitoring = [{
            name: 'Oracle 12 C',
            className: 'Dashborder',
            classPaddingTop: '',
            cpu: 8,
            memory: 32,
            space: 2,
            status: 'Green',
            lastStatus: 15,
            throughput: 73,
            activeConnection: 74,
            activeRequest: 02,
            responseTime: 20,
            dataThroughput: 29,
            dataProcessed: 24

        },
        {
            name: 'MS SQLServer 2014 SP2',
            className: '',
            classPaddingTop: 'paddingtop',
            cpu: 4,
            memory: 16,
            space: 1,
            status: 'Green',
            lastStatus: 15,
            throughput: 73,
            activeConnection: 74,
            activeRequest: 02,
            responseTime: 20,
            dataThroughput: 29,
            dataProcessed: 24
        }
    ]

    //Security-as-a-Service
    $scope.vulnerableHeaders = [{ name: ' IP Address' }, { name: ' DNS' }, { name: ' Vulnerabilities' }]

    $scope.vulnerableItems = [
        { ipAddress: '10.31.100.11', DNS: 'dc02.melcara.int', Vulnerabilities: '-' },
        { ipAddress: '10.31.100.131', DNS: 'drac01.dhcp.melcara.int', Vulnerabilities: '-' },
        { ipAddress: '10.31.130.32', DNS: 'openldap', Vulnerabilities: '-' },
        { ipAddress: '10.31.104.144', DNS: '-', Vulnerabilities: '-' },
        { ipAddress: '10.31.254.254', DNS: 'asa-inside.net.melcara.int', Vulnerabilities: '-' }
    ]

    $scope.vulnerabilitiesHeaders = [{ name: '' }, { name: ' Mitigated' }, { name: ' Unmitigated' }, { name: ' Exploitable' }, { name: ' Exploitable %' }]

    $scope.vulnerabilitiesItems = [
        { name: 'Critical', mitigated: 12, unmitigated: 14, exploitable: 7, value: 50 },
        { name: 'High', mitigated: 64, unmitigated: 366, exploitable: 35, value: 15 },
        { name: 'Medium', mitigated: 79, unmitigated: 349, exploitable: 57, value: 20 },
        { name: '-', mitigated: '', unmitigated: '', exploitable: '', value: '' },
        { name: '-', mitigated: '', unmitigated: '', exploitable: '', value: '' }
    ]

    //Compliance-as-a-Service
    $scope.complianceService = [
        { name: 'Evaluated Policies', value: 55, className: 'paddingright' },
        { name: 'Evaluated Hosts', value: 177, className: 'paddingright paddingleft' },
        { name: 'Evaluated Controls', value: 1265, className: 'paddingleft' }
    ]

    $scope.passingPoliciesHeaders = [{ name: 'Title' }, { name: 'Passing %' }]
    $scope.passingPoliciesItms = [{ title: 'UDC', value: 100 }, { title: 'New AXI', value: 100 }, { title: 'Solaris', value: 100 }, { title: 'Oracle', value: 100 }, { title: 'Scan by Policy', value: 100 }, ]

    $scope.failingPoliciesHeaders = [{ name: 'Title' }, { name: 'Failing  %' }]
    $scope.failingPoliciesItms = [{ title: 'UDC - Diff Scan settings', value: 100 }, { title: 'CENTOS', value: 100 }, { title: 'Permissions', value: 100 }, { title: 'Corporate Office', value: 85 }, { title: 'Linux Policy', value: 66 }, ]

    //Tickets and Maintenance Schedule
    $scope.topTickets = [
        { title: '', name: 'ASH1', id: 6976, alert: 'Host DOWN alert for HA-vihgj jhkjl kjl', className: 'paddingright', color: 'neonredbg' },
        { title: 'Aeries', name: 'LA1', id: 6975, alert: 'Host DOWN alert for HA-vihgj jhkjl kjl', className: 'paddingleft paddingright', color: 'bluebg' },
        { title: 'Host Analytics', name: 'LA4', id: 6973, alert: 'Host DOWN alert for HA-vihgj jhkjl kjl', className: 'paddingleft', color: 'bluebg' }
    ]

    $scope.bottomTickets = [
        { title: 'Black Stone', name: 'LA4', id: 6938, alert: 'Host DOWN alert for HA-vihgj jhkjl kjl', className: 'paddingright', color: 'neonredbg' },
        { title: 'Aeries', name: 'SF8', id: 6966, alert: 'Host DOWN alert for HA-vihgj jhkjl kjl', className: 'paddingleft paddingright', color: 'neonyellowbg' },
        { title: 'Aeries Demo', name: 'SF10', id: 6971, alert: 'Host DOWN alert for HA-vihgj jhkjl kjl', className: 'paddingleft', color: 'neonyellowbg' }
    ]

    $scope.ticketsCount = [{
            title: 'Support Tickets Count',
            className: 'paddingright',
            classTop: '',
            utilization: {
                type: 'doughnutLabels',

                data: {
                    datasets: [{

                        data: [30, 70],
                        backgroundColor: [
                            "#43e091",
                            "#fe5252"
                        ]
                    }],
                    labels: [
                        "Closed",
                        "Open"
                    ]
                },
                options: {
                    rotation: 1.0 * Math.PI,
                    circumference: 2 * Math.PI,

                    responsive: true,
                    legend: {
                        display: false,
                    },
                    animation: {
                        animateScale: true,
                        animateRotate: true
                    }
                    // tooltips: { bodyFontSize: 20 }
                }
            },
        },
        {
            title: 'Incident Tickets Count',
            className: 'paddingleft paddingright',
            classTop: 'middlec',
            utilization: {
                type: 'doughnutLabels',
                data: {
                    datasets: [{

                        data: [80, 20],
                        backgroundColor: [
                            "#43e091",
                            "#fe5252"
                        ]
                    }],
                    labels: [
                        "Closed",
                        "Open"
                    ]
                },
                options: {
                    rotation: 1.0 * Math.PI,
                    circumference: 2 * Math.PI,
                    responsive: true,
                    legend: {
                        display: false,
                    },
                    animation: {
                        animateScale: true,
                        animateRotate: true
                    }
                    // tooltips: { bodyFontSize: 20 }
                }
            },
        },
        {
            title: 'Change Ticket Count',
            className: 'paddingleft',
            classTop: '',
            utilization: {
                type: 'doughnutLabels',
                data: {
                    datasets: [{

                        data: [10, 90],
                        backgroundColor: [
                            "#43e091",
                            "#fe5252"
                        ]
                    }],
                    labels: [
                        "Closed",
                        "Open"
                    ]
                },
                options: {
                    rotation: 1.0 * Math.PI,
                    circumference: 2 * Math.PI,
                    responsive: true,
                    legend: {
                        display: false,
                    },
                    animation: {
                        animateScale: true,
                        animateRotate: true
                    }
                    // tooltips: { bodyFontSize: 20 }
                }
            },
        }
    ]

    // line graph
    $scope.unitedConnect = [
        { name: 'MP', dataValue: [10, 15, 13, 17, 12, 14] },
        { name: 'VXC', dataValue: [15, 20, 13, 18, 12, 14] },
        { name: 'ISP', dataValue: [20, 15, 13, 18, 14, 15] },
        { name: 'VPN', dataValue: [25, 20, 13, 16, 12, 15] },
        { name: 'PL', dataValue: [16, 20, 13, 18, 12, 15] }
    ]

    // bar graph

    $scope.failingPolicies = [
        { name: 'By Technology', dataValue: [50, 40, 30, 20, 10], id: 'byTechnology' },
        { name: 'By Criticality', dataValue: [40, 30, 45, 20, 10], id: 'byCriticality' }
    ]

    // doughnut
    Chart.defaults.doughnutLabels = Chart.helpers.clone(Chart.defaults.doughnut);
    var helpers = Chart.helpers;
    var defaults = Chart.defaults;

    Chart.controllers.doughnutLabels = Chart.controllers.doughnut.extend({
        updateElement: function(arc, index, reset) {
            var _this = this;
            var chart = _this.chart,
                chartArea = chart.chartArea,
                opts = chart.options,
                animationOpts = opts.animation,
                arcOpts = opts.elements.arc,
                centerX = (chartArea.left + chartArea.right) / 2,
                centerY = (chartArea.top + chartArea.bottom) / 2,
                startAngle = opts.rotation, // non reset case handled later
                endAngle = opts.rotation, // non reset case handled later
                dataset = _this.getDataset(),
                circumference = reset && animationOpts.animateRotate ? 0 : arc.hidden ? 0 : _this.calculateCircumference(dataset.data[index]) * (opts.circumference / (2.0 * Math.PI)),
                innerRadius = reset && animationOpts.animateScale ? 0 : _this.innerRadius + 5,
                outerRadius = reset && animationOpts.animateScale ? 0 : _this.outerRadius,
                custom = arc.custom || {},
                valueAtIndexOrDefault = helpers.getValueAtIndexOrDefault;

            helpers.extend(arc, {
                // Utility
                _datasetIndex: _this.index,
                _index: index,

                // Desired view properties
                _model: {
                    x: centerX + chart.offsetX,
                    y: centerY + chart.offsetY,
                    startAngle: startAngle,
                    endAngle: endAngle,
                    circumference: circumference,
                    outerRadius: outerRadius,
                    innerRadius: innerRadius,
                    label: valueAtIndexOrDefault(dataset.label, index, chart.data.labels[index])
                },

                draw: function() {
                    var ctx = this._chart.ctx,
                        vm = this._view,
                        sA = vm.startAngle,
                        eA = vm.endAngle,
                        opts = this._chart.config.options;

                    $timeout(function() {
                        opts.defaultFontSize = 10;
                        opts.defaultFontStyle = 'bold';
                        opts.defaultColor = '#fff'
                            // for (var i = 0; i < 3; i++) {
                            //     // angular.element(document.getElementById("private-CPU-halfDonut" + i)).css({ height: '142px' })
                            //     // angular.element(document.getElementById("private-RAM-halfDonut" + i)).css({ height: '142px' })
                            // }
                            //angular.element('#myChart').css({ width: '140px', height: '150px' })
                            //angular.element('#myChart').css({ width: '140px', height: '150px', position: 'absolute', 'margin-top': '363px', 'margin-left': '94px', 'z-index': '1' })

                    }, 0);

                    var labelPos = this.tooltipPosition();
                    // console.log('labelPos', labelPos);
                    var segmentLabel = dataset.data[index]

                    ctx.beginPath();
                    ctx.arc(vm.x, vm.y, vm.outerRadius, sA, eA);
                    ctx.arc(vm.x, vm.y, vm.innerRadius, eA, sA, true);

                    ctx.closePath();
                    ctx.strokeStyle = vm.borderColor;
                    ctx.lineWidth = vm.borderWidth;

                    ctx.fillStyle = vm.backgroundColor;

                    ctx.fill();
                    ctx.lineJoin = 'bevel';

                    if (vm.borderWidth) {
                        ctx.stroke();
                    }

                    if (vm.circumference > 0.0015) { // Trying to hide label when it doesn't fit in segment
                        ctx.beginPath();
                        opts.defaultFontSize = 12;
                        opts.defaultFontStyle = 'normal';
                        opts.defaultFontFamily = 'Open Sans, sans-serif'
                        ctx.font = helpers.fontString(opts.defaultFontSize, opts.defaultFontStyle, opts.defaultFontFamily);
                        ctx.fillStyle = "#190707";
                        ctx.textBaseline = "top";
                        ctx.textAlign = "center";

                        // Round percentage in a way that it always adds up to 100%
                        ctx.fillStyle = "#ffffff";

                        if (ctx.canvas.id === 'private-CPU-halfDonut0' || ctx.canvas.id === 'private-CPU-halfDonut1' ||
                            ctx.canvas.id === 'private-CPU-halfDonut2' || ctx.canvas.id === 'private-RAM-halfDonut0' ||
                            ctx.canvas.id === 'private-RAM-halfDonut1' || ctx.canvas.id === 'private-RAM-halfDonut2') {
                            ctx.fillText(segmentLabel.toFixed(0) + "%", labelPos.x + 1, labelPos.y - 5);
                        } else {
                            ctx.fillText(segmentLabel.toFixed(0), labelPos.x + 1, labelPos.y - 5);
                        }
                    }
                    //display in the center the total sum of all segments
                    var total = dataset.data.reduce((sum, val) => sum + val, 0);

                }
            });

            var model = arc._model;
            model.backgroundColor = custom.backgroundColor ? custom.backgroundColor : valueAtIndexOrDefault(dataset.backgroundColor, index, arcOpts.backgroundColor);
            model.hoverBackgroundColor = custom.hoverBackgroundColor ? custom.hoverBackgroundColor : valueAtIndexOrDefault(dataset.hoverBackgroundColor, index, arcOpts.hoverBackgroundColor);
            model.borderWidth = custom.borderWidth ? custom.borderWidth : valueAtIndexOrDefault(dataset.borderWidth, index, arcOpts.borderWidth);
            model.borderColor = custom.borderColor ? custom.borderColor : valueAtIndexOrDefault(dataset.borderColor, index, arcOpts.borderColor);

            // Set correct angles if not resetting
            if (!reset || !animationOpts.animateRotate) {
                if (index === 0) {
                    model.startAngle = opts.rotation;
                } else {
                    model.startAngle = _this.getMeta().data[index - 1]._model.endAngle;
                }
                model.endAngle = model.startAngle + model.circumference;

            }
            arc.pivot();
        }
    });


    angular.element(document).ready(function() {

        // console.log("Private Cloud : " + angular.toJson($scope.privateCloud));
        angular.forEach($scope.privateCloud, function(value, key) {
            var CPUHalfDonut = document.getElementById("private-CPU-halfDonut" + key).getContext("2d");
            window.upDownChart = new Chart(CPUHalfDonut, value.utilization);

            var RAMHalfDonut = document.getElementById("private-RAM-halfDonut" + key).getContext("2d");
            window.upDownChart = new Chart(RAMHalfDonut, value.utilization1);
        });

        // console.log(" public Cloud: " + angular.toJson($scope.publicCloud));
        angular.forEach($scope.publicCloud, function(value, key) {
            var publicHalfDonut = document.getElementById("public-halfDonut" + key).getContext("2d");
            window.upDownChart = new Chart(publicHalfDonut, value.utilization);
        });

        // console.log("$scope.ticketsCount: " + angular.toJson($scope.ticketsCount));
        angular.forEach($scope.ticketsCount, function(value, key) {
            var donut = document.getElementById("ticket-donut" + key).getContext("2d");
            window.upDownChart = new Chart(donut, value.utilization);
        });

        // line graph
        $scope.activeLineTab = 'MP';

        $scope.lineGraph = function(value, dataValue) {

            $scope.activeLineTab = value;

            var lineChart = document.getElementById("line-chart").getContext("2d");

            //set same height like united cloud for colo widget 
            $scope.$watch(function() {
                $scope.style = {
                    height: lineChart.canvas.height + 20 + 'px' //set the height in style to our elements height
                };
            });

            if (window.line) {
                window.line.destroy();
                console.log('window.line', window.line)
            }
            window.line = new Chart(lineChart, {
                type: "line",
                data: {
                    "labels": [
                        "1:55",
                        "2:00",
                        "2:05",
                        "2:10",
                        "2:15",
                        "2:20"
                    ],
                    "datasets": [{
                        "label": "BandWidth",
                        "fill": "false",
                        yAxisID: "y-axis-0",
                        lineTension: 0.1,
                        backgroundColor: "rgba(75,192,192,0.4)",
                        borderColor: "#ca4242",
                        borderCapStyle: 'butt',
                        borderDash: [],
                        borderDashOffset: 0.0,
                        borderJoinStyle: 'miter',
                        pointBorderColor: "#ca4242",
                        pointBackgroundColor: "#fff",
                        pointBorderWidth: 2,
                        pointHoverRadius: 5,
                        pointHoverBackgroundColor: "#ca4242",
                        pointHoverBorderColor: "#ca4242",
                        pointHoverBorderWidth: 2,
                        pointRadius: 5,
                        pointHitRadius: 10,
                        "data": dataValue
                    }]

                },
                options: {
                    hover: {
                        animationDuration: 0, // duration of animations when hovering an item
                        intersect: false
                    },
                    scales: {
                        xAxes: [{
                            display: true,
                            scaleLabel: {
                                display: true,
                                labelString: 'Time',
                                fontColor: "#8a8383"

                            },
                            gridLines: {
                                display: false,
                            }
                        }],
                        yAxes: [{
                            display: true,
                            position: "left",
                            "id": "y-axis-0",
                            ticks: {
                                beginAtZero: true,
                                fixedStepSize: 5,
                                max: 25,
                                min: 0
                            },
                            scaleLabel: {
                                display: true,
                                labelString: 'BandWidth',
                                // scaleLineColor: "red",
                                // scaleLineWidth: 1,
                                fontColor: "#8a8383"
                            },
                            gridLines: {
                                display: true,
                                color: "#e7e7e7",
                                zeroLineColor: '#ffffff',
                                // zeroLineColor: '#e7e7e7',
                                zeroLineWidth: 0,
                                //tickMarkLength: 5
                            }
                        }]
                    }
                }
            });
        }

        if ($scope.activeLineTab == 'MP') {
            $scope.lineGraph('MP', [10, 15, 13, 17, 12, 14]);
        }
        // End line graph

        // bar graph

        // Limit the size of the labels on the x axis
        Chart.scaleService.updateScaleDefaults('category', {
            ticks: {
                callback: function(tick) {
                    var characterLimit = 5;
                    if (tick.length >= characterLimit) {
                        return tick.slice(0, tick.length).substring(0, characterLimit - 1).trim() + '...';
                    }
                    return tick;
                }
            }
        });

        $scope.activeBarTab = 'byTechnology';

        $scope.barGraph = function(value, dataValue) {
            $scope.activeBarTab = value;

            var dataPack1 = dataValue;
            var dataPack2 = [100, 100, 100, 100, 100];
            var XAxisLabels = ['Sybase ASE15', 'Oracle Enterprice Linux 5.x', 'Oracle Enterprice Linux 4.x', 'IBM WebSphere', 'AIX 6.x'];
            var barChart = document.getElementById('bar-chart').getContext("2d");

            //set same height like Top Failing Policies for Top 5 Passing Policies and Top 5 Failing Policies widget 
            $scope.$watch(function() {
                $scope.height = {
                    height: barChart.canvas.height + 52 + 'px' //set the height in style to our elements height
                };
            });

            var bar_chart = new Chart(barChart, {
                type: 'bar',
                data: {
                    labels: XAxisLabels,
                    datasets: [{
                            label: '',
                            data: dataPack1,
                            backgroundColor: "rgba(202, 66, 66, 1)",
                            hoverBackgroundColor: "rgba(202, 66, 66, 1)",
                            hoverBorderWidth: 1,
                            hoverBorderColor: 'lightgrey'
                        },
                        {
                            label: '',
                            data: dataPack2,
                            backgroundColor: "rgba(228, 232, 230, 1)",
                            hoverBackgroundColor: "rgba(228, 232, 230, 1)",
                            hoverBorderWidth: 1,
                            hoverBorderColor: 'lightgrey'
                        },
                    ]
                },
                options: {
                    elements: {
                        rectangle: {
                            borderWidth: 1,
                            borderColor: 'rgba(228, 232, 230, 1)',
                            borderSkipped: 'bottom'
                        }
                    },
                    animation: {
                        duration: 10,
                    },
                    tooltips: {
                        enabled: true,
                        mode: 'label',
                        callbacks: {
                            title: function(tooltipItems, data) {
                                //tooltipItems["0"].y - 10;
                                return data.labels[tooltipItems[0].index];
                            }
                        }
                    },
                    scales: {
                        xAxes: [{
                            stacked: true,
                            gridLines: { display: false },
                            barPercentage: 0.6,
                            ticks: {
                                // Show all labels
                                autoSkip: false,
                            }
                        }],
                        yAxes: [{
                            stacked: true,
                            ticks: {
                                beginAtZero: true,
                                fixedStepSize: 50,
                                max: 100,
                                min: 0
                            },
                            gridLines: {
                                display: true,
                                color: "#e7e7e7",
                            }
                        }],
                    } // scales
                    // legend: { display: true }
                } // options
            });
        }
        if ($scope.activeBarTab == 'byTechnology') {
            $scope.barGraph('byTechnology', [50, 40, 30, 20, 10]);
        }
    })

    // angular-bootstrap-calendar
    var vm = this;
    //These variables MUST be set as a minimum for the calendar to work
    vm.calendarView = 'month';

    calendarConfig.allDateFormats.angular.date.weekDay = 'EEE';
    $scope.showCalender = true;
    $scope.showEvents = false;

    vm.viewDate = new Date();
    vm.events = [{
        title: 'overdued Ticket',
        color: { // can also be calendarConfig.colorTypes.warning for shortcuts to the deprecated event types
            primary: '#D8474E', // the primary event color (should be darker than secondary)
            secondary: '' // the secondary event color (should be lighter than primary)
        },
        startsAt: moment().startOf('week').subtract(1, 'days').add(8, 'hours').toDate(),
        endsAt: moment().startOf('week').add(0, 'week').add(9, 'hours').toDate(),
        draggable: true,
        resizable: true,
    }, {
        title: 'Future Ticket',
        color: { // can also be calendarConfig.colorTypes.warning for shortcuts to the deprecated event types
            primary: '#F3B137', // the primary event color (should be darker than secondary)
            secondary: '' // the secondary event color (should be lighter than primary)
        },
        startsAt: moment().subtract(0, 'day').toDate(),
        endsAt: moment().add(1, 'days').toDate(),
        draggable: true,
        resizable: true,
    }, {
        title: 'Solved Ticket',
        color: { // can also be calendarConfig.colorTypes.warning for shortcuts to the deprecated event types
            primary: '#64AF77', // the primary event color (should be darker than secondary)
            secondary: '' // the secondary event color (should be lighter than primary)
        },
        startsAt: moment().startOf('day').subtract(5, 'days').add(7, 'hours').toDate(),
        endsAt: moment().startOf('day').add(19, 'hours').toDate(),
        recursOn: 'year',
        draggable: true,
        resizable: true,
    }];

    vm.cellIsOpen = false;

    vm.addEvent = function() {
        vm.events.push({
            title: 'New event',
            startsAt: moment().startOf('day').toDate(),
            endsAt: moment().endOf('day').toDate(),
            color: calendarConfig.colorTypes.important,
            draggable: true,
            resizable: true,
        });
    };
    vm.toggle = function($event, field, event) {
        $event.preventDefault();
        $event.stopPropagation();
        event[field] = !event[field];
    };

    vm.timespanClicked = function(date, cell) {
        if (vm.calendarView === 'month') {
            if ((vm.cellIsOpen && moment(date).startOf('day').isSame(moment(vm.viewDate).startOf('day'))) || cell.events.length === 0 || !cell.inMonth) {
                vm.cellIsOpen = false;
            } else {
                vm.cellIsOpen = false;
                $scope.events = cell.events;
                $scope.showCalender = false;
                $scope.showEvents = true;
                vm.viewDate = date;
            }
        } else if (vm.calendarView === 'year') {
            if ((vm.cellIsOpen && moment(date).startOf('month').isSame(moment(vm.viewDate).startOf('month'))) || cell.events.length === 0) {
                vm.cellIsOpen = false;
            } else {
                $scope.events = cell.events;
                $scope.showCalender = false;
                $scope.showEvents = true;
                vm.cellIsOpen = false;
                vm.viewDate = date;
            }
        }
    };
    $scope.back = function() {
        $scope.showEvents = false;
        $scope.showCalender = true;
    }

    $scope.getEventsDetails = function(item) {
        // $state.transitionTo('home.eventsInfo', { advertiser: item });
        $rootScope.eventDetails = item;
        // $rootScope.$broadcast('eventName', item);
    }

    vm.modifyCell = function(cell) {
        if (cell.badgeTotal != 0) {
            cell.cssClass = 'event-cell';
        }
    };
})