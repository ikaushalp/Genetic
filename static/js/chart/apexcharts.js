// Shared Colors Definition
const primary = '#6993FF';
const success = '#1BC5BD';
const info = '#8950FC';
const warning = '#FFA800';
const danger = '#F64E60';

jQuery(document).ready(function () {
    const apexChart = "#chart_1";
    var options = {
        series: [{
            name: "Desktops",
            data: [10, 41, 35, 51, 49, 62, 69, 91, 148, 110, 150, 200]
        }],
        chart: {
            height: 350,
            type: 'line',
            zoom: {
                enabled: true
            }
        },
        title: {
            text: 'Stock Price Movement',
            align: 'left'
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            curve: 'straight'
        },
        grid: {
            row: {
                colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
                opacity: 0.5
            },
        },
        xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        },
        colors: [primary]
    };

    var chart = new ApexCharts(document.querySelector(apexChart), options);
    chart.render();
});
