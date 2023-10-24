const container = document.querySelector(".container");

for (let i = 0; i < 16; i++) {
    let row = document.createElement("div");
    console.log("Row made");
    row.classList.add(".row");
    container.appendChild(row);
}