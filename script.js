const container = document.querySelector("#container")

const colorElement = document.querySelector("#color");
let color = colorElement.value;

colorElement.addEventListener("input", () => {
    color = colorElement.value;
    console.log(color);
})


let useEraser = false;
const eraser = document.querySelector("#eraser");

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

eraser.addEventListener("click", eraserFunctions)

// eraser.addEventListener("click", () => {
//     if (useEraser == false) {
//         useEraser = true;
//         eraser.textContent = "Eraser - On";
//     } else {useEraser = false;
//         eraser.textContent = "Eraser - Off";
//     };
// })

let useRainbow = false;
const rainbow = document.querySelector("#rainbow");

function rainbowFunctions() {
    if (useRainbow == false) {
        useRainbow = true;
        rainbow.textContent = "Rainbow mode - On";
        useEraser = false;
        eraser.textContent = "Eraser - Off";
    } else {useRainbow = false;
        rainbow.textContent = "Rainbow mode - Off";
    };
    console.log(useRainbow);
}

rainbow.addEventListener("click", rainbowFunctions);

function rainbowColors() {
    let letters = "0123456789ABCDEF";
    let activeColor = "#";
    for (let i = 0; i < 6; i++) {
        activeColor += letters[(Math.floor(Math.random() * 16))];}
    return activeColor;
}

function altPaintSquare(e) {
    if (useRainbow == true) {
        e.style.backgroundColor = rainbowColors();
    } else if (useEraser == false) {
    e.style.backgroundColor = color;
} else if (useEraser == true) {
    e.style.backgroundColor = "white";
}
console.log(useRainbow);
}

for (let i = 0; i< 16; i++) {
    let newRow = document.createElement("div");
    for (let n = 0; n< 16; n++) {
        let newDiv = document.createElement("div");
        newDiv.textContent = "";
        newDiv.classList.add("gridSquare")
        newRow.appendChild(newDiv);
    }
    container.appendChild(newRow);
}

function paintSquare(e) {
    e.classList.add("squarePaint");
}

const squares = document.querySelectorAll(".gridSquare");
for (let square of squares) {
    square.addEventListener("mouseover", function(e) {
        console.log(this);
        // rainbowColors()
        altPaintSquare(this);
    });
}

const clear = document.querySelector("#clear");
clear.addEventListener("click", () => {
    for (let square of squares) {
        square.style.backgroundColor = "white";
        useEraser = false;
        eraser.textContent = "Eraser - Off";
        }
})
