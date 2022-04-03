const GRID_SIZE = 32;

function getSideLength() {
    const main = document.querySelector("main");
    const WIDTH = Math.max(main.clientWidth, main.offsetWidth, main.scrollWidth); 
    const HEIGHT = Math.max(main.clientHeight, main.offsetHeight, main.scrollHeight);
    
    const widthLength = WIDTH * 0.8 / 32;
    const heightLength = HEIGHT * 0.8 / 32;
    return Math.min(widthLength, heightLength);
}

const SIDE_LENGTH = getSideLength();
console.log(SIDE_LENGTH);

const grid = document.getElementById("grid");


for (let row_index = 0; row_index < GRID_SIZE; row_index++) {
    const row = document.createElement("div");
    row.style.display = "flex";
    
    for (let column_index = 0; column_index < GRID_SIZE; column_index++) {
        const cell = document.createElement("div");
        cell.style.border = "1px solid black";
        cell.style.width = `${SIDE_LENGTH}px`;
        cell.style.height = `${SIDE_LENGTH}px`;
        row.appendChild(cell);
    }
    grid.appendChild(row);
}