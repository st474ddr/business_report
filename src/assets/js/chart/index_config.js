let chartOptions = {
    mixOptions: {
        chart: {
            type: "line",
            height: 300,
            toolbar: {
                show: true,
                tools: {
                    zoom: false,
                    pan: false,
                    reset: false
                }
            }
        },
        fill: {
            type: "solid"
        },
        legend: {
            itemMargin: {
                vertical: "20"
            }
        },
        colors: ["#26E7A6", "#6EA7CC", "#1E1E1E", "#E2B56C"],
        stroke: {
            width: 3
        },
        tooltip: {
            enabled: true
        },
        dataLabels: {
            enabled: false
        },
        labels: [
            "01/01 2001",
            "02/01 2001",
            "03/01 2001",
            "04/01 2001",
            "05/01 2001",
            "06/01 2001",
            "07/01 2001",
            "08/01 2001",
            "09/01 2001",
            "10/01 2001",
            "11/01 2001",
            "12/01 2001"
        ],
        xaxis: {
            tooltip: {
                enabled: false
            }
        },
        yaxis: [
            {
                title: {
                    text: "金額"
                }
            },
            {
                opposite: true,
                title: {
                    text: "占比"
                }
            }
        ]
    },
    gaugeOptions: {
        chart: {
            type: 'radialBar',
        },
        colors: [
            function ({ value, seriesIndex, w }) {
                if (value > 30) {
                    return '#FF0000'
                } else {
                    return '#20E647'
                }
            }
        ],
        plotOptions: {
            radialBar: {
                startAngle: -90,
                endAngle: 90,
                hollow: {
                    size: '60%'
                },
                track: {
                    background: "#e7e7e7",
                    strokeWidth: '100%',
                    margin: 5, // margin is in pixels
                    dropShadow: {
                        enabled: true,
                        top: 2,
                        left: 0,
                        color: '#999',
                        opacity: 1,
                        blur: 2
                    }
                },
                dataLabels: {
                    name: {
                        show: false
                    },
                    value: {
                        show: true,
                        offsetY: -2,
                        fontSize: '54px',
                        fontWeight: 400,
                        color: "black",
                    }
                }
            }
        }
    },

    donutOptions: {
        responsive: true,
        maintainAspectRatio: false
    },
    sparkOptions: {
        chart: {
            id: "sparkline1",
            group: "sparklines",
            type: "area",
            height: 160,
            toolbar: {
                show: false
            },
            sparkline: {
                enabled: true
            }
        },
        stroke: {
            curve: "straight"
        },
        fill: {
            opacity: 1
        },
        grid: {
            show: false
        },
        dataLabels: {
            enabled: false
        },
        labels: [
            "2021-09-01",
            "2021-09-02",
            "2021-09-03",
            "2021-09-04",
            "2021-09-05",
            "2021-09-06",
            "2021-09-07",
            "2021-09-08",
            "2021-09-09",
            "2021-09-10",
            "2021-09-11",
            "2021-09-12",
            "2021-09-13",
            "2021-09-14",
            "2021-09-15",
            "2021-09-16",
            "2021-09-17",
            "2021-09-18",
            "2021-09-19",
            "2021-09-20",
            "2021-09-21",
            "2021-09-22",
            "2021-09-23",
            "2021-09-24",
            "2021-09-25",
            "2021-09-26",
            "2021-09-27",
            "2021-09-28",
            "2021-09-29",
            "2021-09-30"
        ],
        xaxis: {
            show: false,
            type: "datetime",
            tooltip: {
                enabled: false
            }
        },
        yaxis: {
            show: false,
            min: 0,
            minWidth: 0
        },
        axisBorder: {
            show: false
        },
        axisTicks: {
            show: false
        },
        colors: ["#008FFB"]
    },
    heatmapOptions: {
        chart: {
            height: 350,
            type: "heatmap",
            toolbar: {
                show: true,
                tools: {
                    zoom: false,
                    pan: false,
                    reset: false
                }
            },
            events: {
                click: function (event, chartContext, config) {
                    // The last parameter config contains additional information like `seriesIndex` and `dataPointIndex` for cartesian charts
                    console.log(123)
                }
            }
        },
        xaxis: {
            show: false,
            tooltip: {
                enabled: false
            }
        },
        noData: {
            text: "loading..",
        },
        dataLabels: {
            enabled: false
        },
        colors: ["#008FFB"],
        title: {
            text: "每日訂單"
        }
    }
}


export default chartOptions;