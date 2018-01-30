app.controller('change-management', function($scope, $uibModal, $timeout, $rootScope) {
    console.log('change-management');

    $scope.headers = [{ title: 'Ticket ID' }, { title: 'Subject' }, { title: 'Datacenter' }, { title: 'Status' }, { title: 'Priority' }, { title: 'Updated on' }]

    $scope.tickets = [
        { id: 7110, subject: 'demo test1', datacenter: 'NA', status: 'closed', priority: 'N/A', updatedOn: 'Jun 29, 2017 9:00:18 PM', description: '7110 Lorem ipsum Duis id erat. Suspendisse potenti. Aliquam vulputate, pede vel vehicula accumsan, mi neque rutrum erat, eu congue orci lorem eget lorem. Vestibulum non ante. Duis cursus. Maecenas ligula eros, blandit nec, pharetra at, semper at, magna. Nullam ac lacus. Nulla facilisi.' },
        { id: 7111, subject: 'demo test2', datacenter: 'NA', status: 'closed', priority: 'N/A', updatedOn: 'Feb 20, 2017 8:00:18 AM', description: '7111 Lorem ipsum Duis id erat. Suspendisse potenti. Aliquam vulputate, pede vel vehicula accumsan, mi neque rutrum erat, eu congue orci lorem eget lorem. Vestibulum non ante. Duis cursus. Maecenas ligula eros, blandit nec, pharetra at, semper at, magna. Nullam ac lacus. Nulla facilisi.' },
        { id: 7112, subject: 'demo test3', datacenter: 'NA', status: 'opened', priority: 'N/A', updatedOn: 'Sept 21, 2017 7:00:17 PM', description: '7112 Lorem ipsum Duis id erat. Suspendisse potenti. Aliquam vulputate, pede vel vehicula accumsan, mi neque rutrum erat, eu congue orci lorem eget lorem. Vestibulum non ante. Duis cursus. Maecenas ligula eros, blandit nec, pharetra at, semper at, magna. Nullam ac lacus. Nulla facilisi.' }
    ];

    $scope.ticketsDescription = function($index) {
        //$scope.isVisible = $scope.isVisible == 0 ? true : false;
        $scope.activePosition = $scope.activePosition == $index ? -1 : $index;
    };

    $scope.ticketDetails = function(item) {
        console.log('ticketDetails item', item)
            //$rootScope.$broadcast('ticketes', item);
        $rootScope.ticketInfo = item;
    };

    // modal for + Create Ticket
    $scope.createTicketModal = function() {
        $uibModal.open({
                backdrop: true,
                backdropClick: true,
                dialogFade: false,
                keyboard: true,
                templateUrl: 'rest/app/client/views/create-ticket-modal.html',
                controller: 'create-ticket-modal',
            })
            .result.then(
                function() {
                    //alert("OK");
                },
                function() {
                    //alert("Cancel");
                }
            );
    }

    $scope.priorityTicket = {
        type: 'doughnutLabels',
        data: {
            datasets: [{
                data: [24, 12, 25, 52],
                backgroundColor: ["#F0CC53", "#FF5754", "#C6C8C7", "#00DF97"]
            }],
            labels: ["High", "Critical", "Low", "Normal", ]
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
        }
    };

    $scope.statusTicket = {
        type: 'doughnutLabels',
        data: {
            datasets: [{
                data: [24, 10, 52],
                backgroundColor: ["#F0CC53", "#FF5754", "#3EB0E5"]
            }],
            labels: ["closed", "Pending", "Open "]
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
        }
    };

    // Horizontal bar graph
    var ctx = document.getElementById("myChart").getContext("2d");
    var myChart = new Chart(ctx, {
        type: 'horizontalBar',
        data: {
            labels: ['Request', 'Hardware', 'Application', 'Facilities', 'Partner', 'Data'],
            datasets: [{
                fill: false,
                data: [300, 230, 209, 178, 114, 48],
                backgroundColor: "rgba(67, 224, 145, 1)",
                borderWidth: 0
            }],
        },
        options: {
            events: false,
            tooltips: {
                enabled: false
            },
            animation: {
                duration: 500,
                easing: "easeOutQuart",
                onComplete: function() {
                    var ctx = this.chart.ctx;
                    ctx.font = Chart.helpers.fontString(Chart.defaults.global.defaultFontFamily, 'normal', Chart.defaults.global.defaultFontFamily);
                    ctx.textAlign = 'left';
                    ctx.textBaseline = 'bottom';

                    this.data.datasets.forEach(function(dataset) {
                        console.log(dataset);
                        for (var i = 0; i < dataset.data.length; i++) {
                            var model = dataset._meta[Object.keys(dataset._meta)[0]].data[i]._model,
                                scale_max = dataset._meta[Object.keys(dataset._meta)[0]].data[i]._yScale.maxHeight;
                            left = dataset._meta[Object.keys(dataset._meta)[0]].data[i]._xScale.left;
                            offset = dataset._meta[Object.keys(dataset._meta)[0]].data[i]._xScale.longestLabelWidth;
                            ctx.fillStyle = '#999797';
                            var y_pos = model.y - 5;
                            var label = model.label + ' (' + dataset.data[i] + ')';
                            // Make sure data value does not get overflown and hidden
                            // when the bar's value is too close to max value of scale
                            // Note: The y value is reverse, it counts from top down
                            if ((scale_max - model.y) / scale_max >= 0.93)
                                y_pos = model.y + 20;
                            // ctx.fillText(dataset.data[i], model.x, y_pos);
                            ctx.fillText(label, left + 10, model.y - 15);
                        }
                    });
                }
            },
            scales: {
                yAxes: [{
                    barPercentage: 0.5,

                    gridLines: {
                        display: false,
                        color: "#e7e7e7",
                        zeroLineColor: '#ffffff',
                        zeroLineWidth: 0
                    },
                    ticks: {
                        mirror: true,
                        fontSize: 13,
                        fontColor: "#fff",
                        padding: -10
                    }
                }],
                xAxes: [{
                    gridLines: {
                        display: false
                    },
                    ticks: {
                        beginAtZero: true,
                        fixedStepSize: 50,
                        max: 300,
                        min: 0
                    }
                }]
            },
            legend: {
                display: false
            },
            title: {
                display: false,
            }
        }
    });

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
                innerRadius = reset && animationOpts.animateScale ? 0 : _this.innerRadius,
                outerRadius = reset && animationOpts.animateScale ? 0 : _this.outerRadius,
                custom = arc.custom || {},
                valueAtIndexOrDefault = helpers.getValueAtIndexOrDefault;

            if (chart.ctx.canvas.id == 'priority-ticket-donut') {
                $scope.donutRadius = 10;

            } else {
                $scope.donutRadius = 10;
            }
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
                    innerRadius: innerRadius + $scope.donutRadius,
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
                    }, 0);

                    var labelPos = this.tooltipPosition();
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

                        ctx.fillText(segmentLabel.toFixed(0), labelPos.x + 1, labelPos.y - 5);

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

        var priorityTicketDonut = document.getElementById("priority-ticket-donut").getContext("2d");
        window.upDownChart = new Chart(priorityTicketDonut, $scope.priorityTicket);

        var statusTicketDonut = document.getElementById("status-ticket-donut").getContext("2d");
        window.upDownChart = new Chart(statusTicketDonut, $scope.statusTicket);
    });
})