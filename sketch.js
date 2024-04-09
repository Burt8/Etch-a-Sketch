let container = document.querySelector(".container");
let numBoxes = 256;

for (let i = 0; i < numBoxes; i++) {
    const box = document.createElement("div");
    box.classList.add("box")
    container.appendChild(box)
};

let boxes = document.querySelectorAll(".box");

boxes.forEach(function(div) {
    div.addEventListener("mouseover", function() {
        div.classList.add("paint")
    })
});