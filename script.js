const container = document.querySelector("#container")

// The option to choose color
const colorElement = document.querySelector("#color");

let color = colorElement.value;

colorElement.addEventListener("input", () => {
    color = colorElement.value;
})


// Create default grid
for (let i = 0; i< 16; i++) {
    let newRow = document.createElement("div");
    newRow.classList.add("gridRow");
    for (let n = 0; n< 16; n++) {
        let newDiv = document.createElement("div");
        newDiv.textContent = "";
        newDiv.classList.add("gridSquare");
        newRow.appendChild(newDiv);
    }
    container.appendChild(newRow);
}

let squares = document.querySelectorAll(".gridSquare");
paint();

// The option to choose grid size limit to 50x50
const gridSize = document.querySelector("#gridSize");

gridSize.addEventListener("click", setGridSize);

function setGridSize() {
    let newSize = +prompt("Enter number of squares between 1 and 50");

    if (isNaN(newSize) || newSize < 1 || newSize > 50) {
    do {
        newSize = +prompt("Enter number of squares between 1 and 50");
    } while (isNaN(newSize) || newSize < 1 || newSize > 50) }

    container.replaceChildren()

    for (let i = 0; i< newSize; i++) {
        let newRow = document.createElement("div");
        newRow.classList.add("gridRow");
        for (let n = 0; n< newSize; n++) {
            let newDiv = document.createElement("div");
            newDiv.textContent = "";
            newDiv.classList.add("gridSquare")
            console.log(newDiv.style.width);
            newRow.appendChild(newDiv);
        }
        container.appendChild(newRow);
    }

    paint();
    
    if (showGrid == true) {
        for (let square of squares) {
            square.style.border = "1px solid black";
            grid.textContent = "Show grid - On";
        }
}}


// Grid visibility
let showGrid = false;

const grid = document.querySelector("#grid");

grid.addEventListener("click", gridFunctions)

function gridFunctions() {
    if (showGrid == false) {
        showGrid = true;
        for (let square of squares) {
            square.style.border = "1px solid black";
            grid.textContent = "Show grid - On";
        }
    } else {showGrid = false;
        for (let square of squares) {
            square.style.border = "1px solid transparent";
            grid.textContent = "Show grid - Off";
        }
    };
}


// Paint on/off on mouse click
let mouseState = false;

container.addEventListener("click", () => {
    if (mouseState == false) {
        mouseState = true}
        else {mouseState = false};
    console.log(mouseState);
});


// Eraser
let useEraser = false;
const eraser = document.querySelector("#eraser");

eraser.addEventListener("click", eraserFunctions)

function eraserFunctions() {
    if (useEraser == false) {
        useEraser = true;
        eraser.textContent = "Eraser - On";
        useRainbow = false;
        rainbow.textContent = "Rainbow mode - Off";
    } else {useEraser = false;
        eraser.textContent = "Eraser - Off";
    };
}


// Rainbow mode

let useRainbow = false;
const rainbow = document.querySelector("#rainbow");

rainbow.addEventListener("click", rainbowFunctions);

function rainbowFunctions() {
    if (useRainbow == false) {
        useRainbow = true;
        rainbow.textContent = "Rainbow mode - On";
        useEraser = false;
        eraser.textContent = "Eraser - Off";
    } else {useRainbow = false;
        rainbow.textContent = "Rainbow mode - Off";
    };
}

function rainbowColors() {
    let letters = "0123456789ABCDEF";
    let activeColor = "#";
    for (let i = 0; i < 6; i++) {
        activeColor += letters[(Math.floor(Math.random() * 16))];}
    return activeColor;
}


// Paint
function paintSquare(e) {
    if (useRainbow == true) {
        e.style.backgroundColor = rainbowColors();
    } else if (useEraser == false) {
    e.style.backgroundColor = color;
} else if (useEraser == true) {
    e.style.backgroundColor = "white";
}
}

function paint() {
    squares = document.querySelectorAll(".gridSquare");
    for (let square of squares) {
        square.addEventListener("mousemove", function(e) {
            console.log(this);
            if (mouseState == true) {paintSquare(this)};
        });
    }
}


// Clear grid
const clear = document.querySelector("#clear");

clear.addEventListener("click", () => {
    for (let square of squares) {
        square.style.backgroundColor = "white";
        useEraser = false;
        eraser.textContent = "Eraser - Off";
        }
})