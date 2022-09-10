const modal = document.getElementById("modal");
const btnClose = document.getElementById("btn-close");
const searchFilter = document.getElementById("search-filter");
// searchFilter.addEventListener("keyup", function () { filterResults() });

const dialogTable = document.getElementById("dialog-table");

let asset1, asset2;

/*   E V E N T S   */

btnClose.onclick = () => closeModal();
searchFilter.onkeyup = () => filterResults();

function closeModal() {
    modal.style.setProperty("display", "none");
}

function openModal() {
    modal.style.setProperty("display", "block");
}

/*   F U N C T I O N S   */

function addAssetButtonsDiv(assetsArray, inputWidget) {
    assetsArray.forEach(asset => {
        const newDiv = document.createElement("div");
        newDiv.innerHTML = asset;
        newDiv.onclick = function () {
            inputWidget.value = asset;
            closeModal();
            loadClosePrices(assetsPairs[inputAsset1.value][inputAsset2.value][0]);
        }
        newDiv.className = "dialog-table-cell";
        dialogTable.appendChild(newDiv);
    });
}

function filterResults() {
    const filter = searchFilter.value.toUpperCase();
    const divArray = dialogTable.getElementsByTagName("div");

    for (let i = 0, div; div = divArray[i]; i++) {
        const txtValue = div.textContent || div.innerText;
        const isVisible = txtValue.toUpperCase().indexOf(filter) > -1;
        div.style.display = isVisible ? "" : "none";
    }
}