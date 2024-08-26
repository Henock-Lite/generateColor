let box = document.querySelector("span");
let bg = document.querySelector("body");
let red, green, blue;

function anime() {
  red = Math.floor(Math.random() * 255);
  green = Math.floor(Math.random() * 255);
  blue = Math.floor(Math.random() * 255);
  bg.style.background = ` rgb(${red},${green},${blue}) `;
  box.textContent = `rgb(${red},${green},${blue})`;
}
setInterval(anime,3000);
