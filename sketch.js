const canvas = document.querySelector(".canvas");
let size = document.querySelector(".size");
let numBoxes = 256;

function gridGen() {
    for (let i = 0; i < numBoxes; i++) {
        const box = document.createElement("div");
        box.classList.add("box")
        canvas.appendChild(box)
    };
}

function addPaint() {
    let boxes = document.querySelectorAll(".box");
    boxes.forEach(function(div) {
        div.addEventListener("mouseover", function() {
            div.classList.add("paint")
        })
    });
}

size.onclick = () => {
    let y = prompt("How tall do you want the canvas to be? (Y-Axis)")
    let x = prompt("How wide would you like your canvas to be? (X-Axis)")
    numBoxes = x * y
    while (canvas.firstChild) {
        canvas.removeChild(canvas.firstChild)
    }
    gridGen()
    addPaint()
}

gridGen()
addPaint()