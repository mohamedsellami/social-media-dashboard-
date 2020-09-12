const circle = document.querySelector(".switch button .circle");
const switcher = document.querySelector(".switch");
const body = document.querySelector("body");
switcher.addEventListener("click", switchBetweenDarkAndLightTheme);
function switchBetweenDarkAndLightTheme() {
  if (circle.style.transform == "translateX(20px)") {
    circle.style.transform = "translateX(0px)";
    body.classList.remove("darkTheme");
  } else {
    circle.style.transform = "translateX(20px)";
    body.classList.add("darkTheme");
  }
}
