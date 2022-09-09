inputAsset1 = document.getElementById("input-asset-1");
inputAsset2 = document.getElementById("input-asset-2");

btnSearchAsset1 = document.getElementById("btn-search-asset-1");
btnSearchAsset2 = document.getElementById("btn-search-asset-2");

selectInterval = document.getElementById("select-interval");

const intervals = [["3m","3 min"],["15m","15 min"],["30m","30 min"],["1h","1 hour"],["2h","2 hours"],["6h","6 hours"],["12h","12 hours"],["1d","1 day"],["1w","1 week"]];

selectInterval.innerHTML = intervals.reduce( (acc,list)=>{
  return acc + `<option value="${list[0]}">${list[1]}</option>\n`;
},'');

btnSearchAsset1.onclick = function () {
  asset1 = inputAsset2.value;
  asset2 = inputAsset2.value;

  if (assets.includes(asset2)) {
      dialogWindow.show();
      addAssetButtonsDiv(Object.keys(assetsPairs[asset1]).sort(), inputAsset1);

  } else if (asset1 === "") {
      dialogWindow.show();

      addAssetButtonsDiv(assets, inputAsset1);
  } else {
      alert("ASset 2 doesn't exist");
  }
}


btnSearchAsset2.onclick = function () {
  asset1 = inputAsset1.value;
  asset2 = inputAsset2.value;
  if (assets.includes(asset1)) {
      console.log(assetsPairs);
      dialogWindow.show();
      addAssetButtonsDiv(Object.keys(assetsPairs[asset1]).sort(), inputAsset2);
  } else if (asset2 === "") {
      dialogWindow.show();
      addAssetButtonsDiv(assets, inputAsset2);
  }
}

const KEY_ENTER = 13;
const KEY_ESC = 27;

inputAsset1.onkeydown = function (event) {
  if (event.keyCode === KEY_ENTER) {
      event.preventDefault();
      loadKlines();
  }
}

inputAsset2.onkeydown = function (event) {
  if (event.keyCode === KEY_ENTER) {
      event.preventDefault();
      loadKlines();
  }
}