
const lineChartView = document.getElementById("line-chart");

// Chart.defaults.global.defaultColor = '#FF0000';
Chart.defaults.global.defaultFontColor = '#FFFFFF';
Chart.defaults.global.defaultFontSize = 15;

Chart.defaults.global.legend.display = false;
// Chart.defaults.global.legend.position = 'chartArea';

// console.log(Chart.defaults.global.elements);

Chart.defaults.global.elements.point.radius = 0;

Chart.defaults.global.responsive = true;
Chart.defaults.global.maintainAspectRatio = false;

Chart.defaults.global.title.display = true;
Chart.defaults.global.title.text = "TITLE";

Chart.defaults.global.title.fontSize = 24;

Chart.defaults.global.animation.duration = 0;

Chart.defaults.global.elements.line.borderWidth = 1;
Chart.defaults.global.elements.point.radius = 3;
Chart.defaults.global.elements.line.fill = false;

Chart.defaults.global.layout.padding = { top: 0, right: 5, bottom: 40, left: 10 };

Chart.defaults.line.scales.xAxes[0].ticks = {
    fontSize: 16,
    maxTicksLimit: 10.0,
    autoskip: true,
    maxRotation: 0,
    minRotation: 0,
    includeBounds: true
};


Chart.defaults.line.scales.yAxes[0].ticks = {
    fontSize: 14,
    maxTicksLimit: 15,
    autoskip: false
};


var prices = [];
var tradePoints = [];

var lineChart = new Chart(lineChartView,
    {
        type: "line",
        data: {
            labels: [],
            datasets: [
                {
                    data: [],
                    label: "Price",
                    width: 1,
                    borderColor: "#4d76cf",
                    showLine: true,
                    radius: 0
                },
                {
                    data: [],
                    label: "Sell",
                    borderColor: "#FF0000",
                    with: 3,
                    showLine: false,
                },
                {
                    data: [],
                    label: "Buy",
                    borderColor: "#00FF00",
                    showLine: false
                }
            ]
        },
        /*  options:{
             layout:{
                 padding:5,
                 margin:0
             }
         } */
    });


function timestamp2date(x) {
    const date = new Date(x + 86400000);
    const year = date.getFullYear().toString().substr(-2);
    const month = (date.getMonth() + 1).toString();
    const day = date.getUTCDate().toString();
    const hours = date.getHours().toString();
    const minutes = date.getMinutes().toString();
    const msg = [[day.padStart(2, "0") + "-" + month.padStart(2, "0") + "-" + year], [hours.padStart(2, "0") + ":" + minutes.padStart(2, "0")]];
    return msg;
}

function loadKlines() {
    const PAIR = getCurrentPair();
    const INTERVAL = getCurrentInterval();

    const klines = getKlines(PAIR, INTERVAL);

    const timestamps = [];
    const prices = [];
    
    klines.forEach(x => prices.push(parseFloat(x[4])));
    klines.forEach(x => timestamps.push(timestamp2date(x[6])));

    lineChart.data.labels = timestamps;
    lineChart.data.datasets[0].data = prices;

    const MIN_PRICE = Math.min(...prices);
    const MAX_PRICE = Math.max(...prices);
    const DELTA_MARGIN = (MAX_PRICE - MIN_PRICE) / 10.0;

    lineChart.options.scales.yAxes[0].ticks.min = MIN_PRICE - DELTA_MARGIN;
    lineChart.options.scales.yAxes[0].ticks.max = MAX_PRICE + DELTA_MARGIN;

    lineChart.update();
}

function getCurrentPair() {
    return assetsPairs[inputAsset1.value][inputAsset2.value][0];
}

function getCurrentInterval() {
    return selectInterval.value;
}


