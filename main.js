const DEFAULT_GRID_SIZE = 50;
const SIDE_LENGTH = getSideLength();
const grid = document.getElementById("grid");

function getSideLength() {
    const main = document.querySelector("main");
    const WIDTH = Math.max(main.clientWidth, main.offsetWidth, main.scrollWidth); 
    const HEIGHT = Math.max(main.clientHeight, main.offsetHeight, main.scrollHeight);
    
    const widthLength = WIDTH * 0.8 / DEFAULT_GRID_SIZE;
    const heightLength = HEIGHT * 0.8 / DEFAULT_GRID_SIZE;
    return Math.min(widthLength, heightLength);
}

function createRow(rowSize) {
    const row = document.createElement("div");
    row.style.display = "flex";
    
    for (let column_index = 0; column_index < rowSize; column_index++) {
        row.appendChild(createCell());
    }
    return row;
}

function createCell() {
    const cell = document.createElement("div");
    cell.style.border = "1px solid #025492";
    cell.style.width = `${SIDE_LENGTH}px`;
    cell.style.height = `${SIDE_LENGTH}px`;
    cell.classList.add("cell");
    cell.addEventListener("mouseenter", () => cell.style.backgroundColor = "#F8CF40");
    return cell;
}

function createGrid(gridSize) {
    for (let row_index = 0; row_index < gridSize; row_index++) {
        grid.appendChild(createRow(gridSize));
    }
}

function resetGrid() {
    while (grid.firstChild) {
        grid.removeChild(grid.firstChild);
    }
}

const clearBtn = document.getElementById("clear");
clearBtn.addEventListener("click", () => {
    gridSize = Number(prompt("Please enter size of the grid", "50"));
    if (gridSize <= 100 && gridSize >=1) {
        resetGrid();
        createGrid(gridSize);
    }
    else {
        alert(`Greed size must be from 1 to 100. You entered "${gridSize}"`);
    }
});

createGrid(DEFAULT_GRID_SIZE);