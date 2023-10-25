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
    let n = prompt("Enter a number:")
    n = Number(n);
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
            cell.style.backgroundColor = "black";
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