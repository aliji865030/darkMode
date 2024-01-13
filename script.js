let toggle = document.querySelector(".toggleContainer");
let circle = document.querySelector("#circleWhite");
let text = document.querySelector(".h1Tag");
let x = document.querySelector("#svg1");
let y = document.querySelector("#svg2");

let isDarkMode = true;
let lightMode = true;
document.body.style.backgroundColor = "white";

toggle.addEventListener("click", () => {
  if (document.body.style.backgroundColor === "white") {
    document.body.style.backgroundColor = "black";
    text.style.color = "white";
    circle.style.left = "55%";
    circle.style.backgroundColor = "blue";
    text.style.color = "blue";
    x.style.transform = `rotate(${isDarkMode ? 360 : 0}deg)`;
    isDarkMode = !isDarkMode;
    x.style.transitionDuration = ".5s";
  } else {
    document.body.style.backgroundColor = "white";
    text.style.color = "black";
    circle.style.left = "2%";
    circle.style.backgroundColor = "white";
    text.style.color = "black";
    y.style.transform = `rotate(${lightMode ? 360 : 0}deg)`;
    lightMode = !lightMode;
    y.style.transitionDuration = ".5s";
  }
});