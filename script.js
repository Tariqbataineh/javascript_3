const text = document.getElementById("text");

const font = document.getElementById("font");
const size = document.getElementById("size");

const italic = document.getElementById("italic");
const bold = document.getElementById("bold");
const underline = document.getElementById("underline");

font.onchange = function () {text.style.fontFamily = font.value;};
size.onchange = function () {text.style.fontSize = size.value;};


italic.onclick = function () {

    if (italic.checked) {text.style.fontStyle = "italic";} 
    else {text.style.fontStyle = "normal";}

};
bold.onclick = function () {

    if (bold.checked) {text.style.fontWeight = "bold";} 
    else { text.style.fontWeight = "normal"; }
};
underline.onclick = function () {

    if (underline.checked) {text.style.textDecoration = "underline";} 
    else {text.style.textDecoration = "none"; }
};