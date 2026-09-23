const image = document.getElementById("image");

const circleBtn = document.getElementById("circle");

const squareBtn = document.getElementById("square");


circle.onclick = function () {
    image.style.borderRadius = "50%";
};


square.onclick = function () {
    image.style.borderRadius = "0";
};