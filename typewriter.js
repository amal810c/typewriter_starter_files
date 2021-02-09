"use strict";

let i = 0;
let text = document.querySelector(".typewritten").textContent;
let speed = 250;

window.addEventListener("load", init);
function init() {
  console.log("init");
  // get the text from somevhere
  document.querySelector(".typewritten").textContent;

  // clear the HTML area
  document.querySelector(".typewritten").textContent = "";

  // start loop
  typeWriter();
}

function typeWriter() {
  if (i < text.length) {
    document.querySelector(".typewritten").innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
