
$.getJSON('https://www.highcharts.com/samples/data/jsonp.php?filename=aapl-ohlc.json&callback=?', function (data) {

    Highcharts.stockChart('container', {

        rangeSelector: {
            selected: 2
        },

        title: {
            text: 'AAPL Stock Price'
        },

        legend: {
            enabled: true
        },

        plotOptions: {
            series: {
                showInLegend: true
            }
        },

        yAxis: [{
            height: '48%'
        }, {
            height: '48%',
            top: '52%'
        }],

        series: [{
            type: 'ohlc',
            id: 'aapl',
            name: 'AAPL Stock Price',
            data: data
        }, {
            yAxis: 1,
            type: 'stochastic',
            linkedTo: 'aapl'
        }]
    });
});
