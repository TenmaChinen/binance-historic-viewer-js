
const API_EXCHANGE_INFO = "https://api.binance.com/api/v1/exchangeInfo";
const API_KLINES = "https://api.binance.com/api/v3/klines?";
// const URL = "symbol=BNBUSDT&interval=30m";


function httpGet(uri) {
    const xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", uri, false);
    xmlHttp.send(null);
    return JSON.parse(xmlHttp.responseText);
}

function getKlines(pair,interval){
    const uriKlines = API_KLINES + "symbol=" + pair + "&interval=" + interval + "&limit=1000";
    return httpGet(uriKlines);
}


var exchangeInfo = Object.freeze( httpGet( API_EXCHANGE_INFO ).symbols ) ;