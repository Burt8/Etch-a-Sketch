let container = document.querySelector(".container");
let numBoxes = 256;

for (let i = 0; i < numBoxes; i++) {
    const box = document.createElement("div");
    box.classList.add("box")
    container.appendChild(box)
};

let boxes = document.querySelectorAll(".box");

for (let i = 0; i < boxes.length; i++) {
    box = boxes[i]
};