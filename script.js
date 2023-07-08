const container = document.querySelector("#container")

const colorElement = document.querySelector("#color");
let color = colorElement.value;

colorElement.addEventListener("input", () => {
    color = colorElement.value;
    console.log(color);
})

function altPaintSquare(e) {
    e.style.backgroundColor = color;
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
        altPaintSquare(this);
    });
}

