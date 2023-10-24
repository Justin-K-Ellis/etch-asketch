const container = document.querySelector(".container");
let cellNumber = 16;

for (let i = 0; i < cellNumber; i++) {
    let row = document.createElement("div");
    row.classList.add("row");
    container.appendChild(row);
    for (let j = 0; j < cellNumber; j++) {
        let cell = document.createElement("div");
        cell.classList.add("cell");
        row.appendChild(cell);
    }
}

cellList = document.querySelectorAll(".cell");

cellList.forEach(cell => {
    cell.addEventListener("mouseover", () => {
        cell.style.backgroundColor = "black";
    })
})
