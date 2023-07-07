const container = document.querySelector("#container")

for (let i = 0; i< 16; i++) {
    let newRow = document.createElement("div");
    for (let n = 0; n< 16; n++) {
        let newDiv = document.createElement("div");
        newDiv.textContent = "+";
        newDiv.classList.add("square")
        newRow.appendChild(newDiv);
    }
    container.appendChild(newRow);
}