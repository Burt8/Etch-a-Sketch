let canvas = document.querySelector(".canvas");
let numBoxes = 256;

for (let i = 0; i < numBoxes; i++) {
    const box = document.createElement("div");
    box.classList.add("box")
    canvas.appendChild(box)
};

let boxes = document.querySelectorAll(".box");

boxes.forEach(function(div) {
    div.addEventListener("mouseover", function() {
        div.classList.add("paint")
    })
});