let h3 = document.querySelector("h3");
let color1 = document.getElementById("color1");
let color2 = document.getElementById("color2");
let body = document.getElementById("gradient");
let bttn = document.getElementById("dog");

bttn.addEventListener("click", randombttn);
color1.addEventListener("input", setgradient);

color2.addEventListener("input", setgradient);

function setgradient() {
  body.style.background =
    "linear-gradient(to right," + color1.value + "," + color2.value + ")";

  h3.textContent = body.style.background + ";";
  
}

setgradient();

function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
   }
  
  return color;
}
function randombttn() {
   body.style.background =
     "linear-gradient(to right," +
     getRandomColor() +
     "," +
     getRandomColor() +
     ")";

   h3.textContent = body.style.background + ";";
}