
const API_EXCHANGE_INFO = "https://api.binance.com/api/v1/exchangeInfo";
const API_KLINES = "https://api.binance.com/api/v1/klines?";
// const URL = "symbol=BNBUSDT&interval=30m";


function httpGet(uri) {
    const xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", uri, false);
    xmlHttp.send(null);
    return JSON.parse(xmlHttp.responseText);
}

function getKlines(pair,interval){
    const uriKlines = `${API_KLINES}symbol=${pair}&interval=${interval}&limit=1000`;
    return httpGet(uriKlines);
}

function getClosePrices(){
    const PAIR = getCurrentPair();
    const INTERVAL = getCurrentInterval();

    const klines = getKlines(PAIR, INTERVAL);

    const timestamps = [];
    const closePrices = [];

    klines.forEach(x => closePrices.push(parseFloat(x[4])));
    klines.forEach(x => timestamps.push(timestamp2date(x[6])));
    
    return [closePrices,timestamps];
}

function timestamp2date(x) {
    // const date = new Date(x + 86400000);
    const date = new Date(x);
    const year = date.getFullYear().toString().substr(-2);
    const month = (date.getMonth() + 1).toString();
    const day = date.getUTCDate().toString();

    const D_M_Y = day.padStart(2, "0") + "-" + month.padStart(2, "0") + "-" + year;

    switch(getCurrentInterval()){
        case "1w":
        case "1d":
            return D_M_Y;
        case "12h":
        case "6h":
        case "2h":
        case "1h":
            const hours = date.getHours().toString();
            const minutes = date.getMinutes().toString();
            return [D_M_Y,hours.padStart(2, "0") + ":" + minutes.padStart(2, "0")];
    }
    
}

const exchangeInfo = Object.freeze( httpGet( API_EXCHANGE_INFO ).symbols ) ;