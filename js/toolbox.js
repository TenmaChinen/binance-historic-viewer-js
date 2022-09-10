inputAsset1 = document.getElementById("input-asset-1");
inputAsset2 = document.getElementById("input-asset-2");

btnSearchAsset1 = document.getElementById("btn-search-asset-1");
btnSearchAsset2 = document.getElementById("btn-search-asset-2");

selectInterval = document.getElementById("select-interval");

const intervals = [["3m","3 min"],["15m","15 min"],["30m","30 min"],["1h","1 hour"],["2h","2 hours"],["6h","6 hours"],["12h","12 hours"],["1d","1 day"],["1w","1 week"]];

selectInterval.innerHTML = intervals.reduce( (acc,list)=>{
  return acc + `<option value="${list[0]}">${list[1]}</option>\n`;
},'');

/*   E V E N T S   */

btnSearchAsset1.onclick = function () {
  [asset1,asset2] = getInputAssets();
  
  if (assets.includes(asset2)) {
    openModal();
    addAssetButtonsDiv(Object.keys(assetsPairs[asset1]).sort(), inputAsset1);
    
  } else if (asset1 === "") {
    openModal();
    addAssetButtonsDiv(assets, inputAsset1);
  } else {
    alert("ASset 2 doesn't exist");
  }
}


btnSearchAsset2.onclick = function () {
  [asset1,asset2] = getInputAssets();

  if (assets.includes(asset1)) {
    openModal();
    addAssetButtonsDiv(Object.keys(assetsPairs[asset2]).sort(), inputAsset2);
  } else if (asset1 === "") {
    openModal();
    addAssetButtonsDiv(assets, inputAsset2);
  }
}

const KEY_ENTER = 13;

inputAsset1.onkeydown = function (event) {
  if (event.keyCode === KEY_ENTER) {
    event.preventDefault();
    loadClosePrices();
  }
  
}

inputAsset1.onkeyup = function(){
  inputAsset1.value = inputAsset1.value.toUpperCase();
}

inputAsset2.onkeydown = function (event) {
  if (event.keyCode === KEY_ENTER) {
    event.preventDefault();
    loadClosePrices();
  }
}

inputAsset2.onkeyup = function(){
  inputAsset2.value = inputAsset2.value.toUpperCase();
}

selectInterval.onchange = function(event){
  loadClosePrices();
}

/*   E V E N T S   */

/*   F U N C T I O N S   */

function getCurrentPair() {
  return assetsPairs[inputAsset1.value][inputAsset2.value][0];
}

function getCurrentInterval() {
  return selectInterval.value;
}

function getInputAssets(){
  return [inputAsset1.value,inputAsset2.value];
}

/*   F U N C T I O N S   */
