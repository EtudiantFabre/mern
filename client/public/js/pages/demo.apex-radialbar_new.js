var colors = ["#39afd1"],
    dataColors = $("#basic-radialbar").data("colors");
if (dataColors) {
    colors = dataColors.split(",");
}
var options = {
    chart: { height: 320, type: "radialBar" },
    plotOptions: { radialBar: { hollow: { size: "70%" } } },
    colors: colors,
    series: [70],
    labels: ["CRICKET"],
};
var chart = new ApexCharts(document.querySelector("#basic-radialbar"), options);
chart.render();

colors = ["#6c757d", "#ffbc00", "#727cf5", "#0acf97"];
dataColors = $("#multiple-radialbar").data("colors");
if (dataColors) {
    colors = dataColors.split(",");
}

chart = new ApexCharts(document.querySelector("#multiple-radialbar"), options);
chart.render();

colors = ["#0acf97", "#727cf5"];
dataColors = $("#circle-angle-radiall").data("colors");
if (dataColors) {
    colors = dataColors.split(",");
}
options = {
    chart: { height: 380, type: "radialBar", toolbar: { show: !0 } },
    plotOptions: {
        radialBar: {
            offsetY: -30,
            startAngle: 0,
            endAngle: 270,
            hollow: {
                margin: 5,
                size: "30%",
                background: "transparent",
                image: void 0,
            },
        },
    },
    dataLabels: { name: { show: !1 }, value: { show: !1 } },
    colors: colors,
    series: [7600, 6700, 6100, 9000],
    labels: ["MTN Ghana", "Dream Oval", "Airtel Ghana", "Vodafone"],
    legend: {
        show: !0,
        floating: !0,
        fontSize: "13px",
        position: "left",
        offsetX: 10,
        offsetY: 10,
        labels: { useSeriesColors: !0 },
        markers: { size: 0 },
        formatter: function (o, a) {
            return o + ":  " + a.w.globals.series[a.seriesIndex] + "$";
        },
        itemMargin: { horizontal: 1 },
    },
    responsive: [{ breakpoint: 480, options: { legend: { show: !1 } } }],
};
chart = new ApexCharts(document.querySelector("#circle-angle-radiall"), options);
chart.render();

colors = ["#727cf5"];
(dataColors = $("#stroked-guage-radial").data("colors")) &&
    (colors = dataColors.split(","));

options = {
    chart: { height: 380, type: "radialBar" },
    plotOptions: {
        radialBar: {
            startAngle: -135,
            endAngle: 135,
            dataLabels: {
                name: { fontSize: "16px", color: void 0, offsetY: 120 },
                value: {
                    offsetY: 76,
                    fontSize: "22px",
                    color: void 0,
                    formatter: function (o) {
                        return o + "%";
                    },
                },
            },
        },
    },
    stroke: { dashArray: 4 },
    colors: colors,
    series: [67],
    labels: ["Median Ratio"],
    responsive: [{ breakpoint: 380, options: { chart: { height: 280 } } }],
};

(chart = new ApexCharts(
    document.querySelector("#stroked-guage-radial"),
    options
)).render();

colors = ["#8f75da", "#727cf5"];
(dataColors = $("#gradient-chart").data("colors")) &&
    (colors = dataColors.split(","));



(chart = new ApexCharts(
    document.querySelector("#gradient-chart"),
    options
)).render();
