const dialogWindow = document.getElementById("dialog-window");

const btnClose = document.getElementsByClassName("close")[0];

const searchFilter = document.getElementById("search-filter");

searchFilter.addEventListener("keyup", function () { filterResults() });

// When the user clicks on <span> (x), close the dialogWindow
btnClose.onclick = () => dialogWindow.close();

const dialogTable = document.getElementById("dialog-table");

var asset1, asset2;

function addAssetButtonsDiv(assetsArray, inputWidget) {
    assetsArray.forEach(asset => {
        const newDiv = document.createElement("div");
        newDiv.innerHTML = asset;
        newDiv.onclick = function () {
            inputWidget.value = asset;
            loadKlines(assetsPairs[inputAsset1.value][inputAsset2.value][0]);
        }
        newDiv.className = "dialog-table-cell";
        dialogTable.appendChild(newDiv);
    });
}

// function removeAllChildNodes(parent) {
//     while (parent.firstChild) {
//         parent.removeChild(parent.firstChild);
//     }
// }

function filterResults() {
    const filter = searchFilter.value.toUpperCase();
    const divArray = dialogTable.getElementsByTagName("div");

    for (let i = 0, div; div = divArray[i]; i++) {
        const txtValue = div.textContent || div.innerText;

        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            div.style.display = "";
        } else {
            div.style.display = "none";
        }
    }
}