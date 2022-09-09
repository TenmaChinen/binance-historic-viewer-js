
function getAssets() {
    let assets = [];
    let baseAsset;
    let quoteAsset;

    exchangeInfo.forEach(symbol => {

        baseAsset = symbol.baseAsset;
        quoteAsset = symbol.quoteAsset;

        if (!assets.includes(baseAsset)) {
            assets.push(baseAsset);
        }
        if (!assets.includes(quoteAsset)) {
            assets.push(quoteAsset);
        }

    });
    return assets.sort();
}


var assets = getAssets();

function getAssetsPairs() {
    let assetsPairs = {};

    assets.forEach(asset => { assetsPairs[asset] = {} });

    exchangeInfo.forEach(symbol => {

        baseAsset = symbol.baseAsset;
        quoteAsset = symbol.quoteAsset;

        if (assets.includes(baseAsset) && assets.includes(quoteAsset)) {
            assetsPairs[baseAsset][quoteAsset] = [symbol.symbol, "M"];
            assetsPairs[quoteAsset][baseAsset] = [symbol.symbol, "D"];
        }
    });
    return assetsPairs;
}

assetsPairs = getAssetsPairs();
