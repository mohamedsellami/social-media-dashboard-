const circle = document.querySelector(".switch button .circle");
const switcher = document.querySelector(".switch button");
const body = document.querySelector("body");
switcher.addEventListener("click", switchBetweenDarkAndLightTheme);
function switchBetweenDarkAndLightTheme() {
  if (circle.style.transform == "translateX(0px)") {
    circle.style.transform = "translateX(20px)";
    circle.style.backgroundColor = "white";
    body.classList.remove("darkTheme");
  } else {
    circle.style.transform = "translateX(0px)";
    circle.style.backgroundColor = "hsl(232, 19%, 15%)";
    body.classList.add("darkTheme");
  }
}
