import ApexCharts from 'apexcharts';

const getSomeChartOptions = () => {
    let mainChartColors = {}

    if (document.documentElement.classList.contains('dark')) {
        mainChartColors = {
            borderColor: '#374151',
            labelColor: '#9CA3AF',
            opacityFrom: 0,
            opacityTo: 0.15,
        };
    } else {
        mainChartColors = {
            borderColor: '#F3F4F6',
            labelColor: '#6B7280',
            opacityFrom: 0.45,
            opacityTo: 0,
        }
    }

    return {
        chart: {
            height: 350,
            type: 'bar',
            foreColor: mainChartColors.labelColor,
            toolbar: {
                show: false,
            },
        },
        series: [{
            data: [30, 40, 45, 50, 49, 60, 70, 91, 125],
        }],
        yaxis: {
            opposite: true,
        }
    };
}

if (document.getElementById('somechart')) {
    const chart = new ApexCharts(
        document.getElementById('somechart'),
        getSomeChartOptions()
    );
    chart.render();

    // init again when toggling dark mode
    document.addEventListener('dark-mode', function () {
        chart.updateOptions(getSomeChartOptions());
    });
}
