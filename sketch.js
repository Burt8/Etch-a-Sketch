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

let boxes = document.querySelectorAll(".box");

boxes.forEach(function(div) {
    div.addEventListener("mouseover", function() {
        div.classList.add("paint")
    })
});

size.onclick = () => {
    while (canvas.firstChild) {
        canvas.removeChild(canvas.firstChild)
    }
}