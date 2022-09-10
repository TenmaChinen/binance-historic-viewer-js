
const canvasChart = document.getElementById("line-chart");

let prices = [];
let tradePoints = [];

const lineChart = new Chart(canvasChart, {
    type: "line",
    data: {
        labels: [],
        datasets: [{
            data: [],
            borderColor: lineColorTop,
            borderWidth: 0.5,
        }, {
            data: [],
            borderColor: lineColorBot,
            borderWidth: 3.0,
        }
        ]
    },
});


function loadClosePrices() {
    const [closePrices, timestamps] = getClosePrices();

    lineChart.data.labels = timestamps;
    lineChart.data.datasets[0].data = closePrices;
    lineChart.data.datasets[1].data = closePrices;

    const MIN_PRICE = Math.min(...closePrices);
    const MAX_PRICE = Math.max(...closePrices);
    const DELTA_MARGIN = (MAX_PRICE - MIN_PRICE) / 10.0;

    lineChart.options.scales.yAxes[0].ticks.min = MIN_PRICE - DELTA_MARGIN;
    lineChart.options.scales.yAxes[0].ticks.max = MAX_PRICE + DELTA_MARGIN;

    lineChart.update();
}

