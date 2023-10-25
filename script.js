const outerContainer = document.querySelector(".outer-container");
const container = document.querySelector(".container");
const buttons = document.querySelector(".buttons");
const resetBtn = document.querySelector("#reset");
const cellChangeBtn = document.querySelector("#cell-change");

let displayCellNum = document.querySelector("#cell-num");
let defaultCellNumber = 16;


drawGrid(defaultCellNumber);
paintCells();
showCellInfo(defaultCellNumber);

resetBtn.addEventListener("click", () => {
    location.reload();
})


cellChangeBtn.addEventListener("click", () => {
    let n = prompt("Enter a number for columns and row (up to 100):")
    n = Number(n);
    if (n > 100) {
        n = 100;
    }
    removeAllChildNodes(container);
    drawGrid(n);
    paintCells();
    showCellInfo(n);
})


function drawGrid(n) {
    for (let i = 0; i < n; i++) {
        let row = document.createElement("div");
        row.classList.add("row");
        container.appendChild(row);
        for (let j = 0; j < n; j++) {
            let cell = document.createElement("div");
            cell.classList.add("cell");
            row.appendChild(cell);
        }
    }
}

function paintCells () {
    cellList = document.querySelectorAll(".cell");
    cellList.forEach(cell => {
        cell.addEventListener("mouseover", () => {
            let color = makeRandomHex()
            cell.style.backgroundColor = color;
        })
    })
}

function showCellInfo(cellNumber) {
    displayCellNum.textContent = `Size: ${cellNumber} x ${cellNumber} (${cellNumber * cellNumber} cells)`;
    outerContainer.insertBefore(displayCellNum, buttons);
}

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

function makeRandomHex() {
    const hexValues = [
        "0", "1", "2", "3", "4", "5", "6", "7", "8", 
        "9", "a", "b", "c", "d", "e", "f"
    ];
    let hexString = "#";
    while (hexString.length <= 6) {
        let n = Math.ceil(Math.random() * hexValues.length-1);
        hexString += hexValues[n];
    }
    return hexString;
}