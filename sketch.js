const canvas = document.querySelector(".canvas");
let size = document.querySelector(".size");
let numBoxes = 256;
let pixels = 0

function basisCalc() {
    let boxSize = 600/Math.sqrt(numBoxes);
    pixels = (boxSize - 2)
}
function resize() {
    basisCalc()
    let style = document.createElement("style");
    let active = document.querySelectorAll("style")
    style.innerHTML = ".box {flex-basis: " + pixels + "px}"
    if (active.length === 1) {
        document.head.removeChild(document.querySelector("style"))
        document.head.appendChild(style)
    } else {
        document.head.appendChild(style)
    }
 
}
function gridGen() {
    for (let i = 0; i < numBoxes; i++) {
        const box = document.createElement("div");
        box.classList.add("box")
        canvas.appendChild(box)
    }
 };


function addPaint() {
    let boxes = document.querySelectorAll(".box");
    boxes.forEach(function(div) {
        div.addEventListener("mouseover", function() {
            div.classList.add("paint")
        })
    });
}

size.onclick = () => {
    const y = prompt("How many squares would you like per grid?")
    if (y > 100) {
        alert("Please choose a number below 101")
        return null
    } else if (typeof y === "string") {
        alert("Please enter a NUMBER")
    }
    numBoxes = y * y
    while (canvas.firstChild) {
        canvas.removeChild(canvas.firstChild)
    }
    gridGen()
    addPaint()
    resize()
}

gridGen()
addPaint()
resize()