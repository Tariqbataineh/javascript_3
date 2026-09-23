const name = document.getElementById("name");
const order = document.getElementById("order");
const button = document.getElementById("btn");

const inputs = document.getElementsByTagName("input");
const result = document.getElementsByClassName("result");
const title = document.querySelector("h1");


button.onclick = function () { result[0].innerHTML ="Hello " + name.value +"! Your order is " + order.value;};

button.onmouseover = function () {button.style.backgroundColor = "green";};

button.onmouseout = function () { button.style.backgroundColor = "blue";};