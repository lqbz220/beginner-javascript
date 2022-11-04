import { handleResult } from "./handlers";
import { colorByLength, isDark } from "./colors";

const colorsE1 = document.querySelector(".colors");

function displayColors(colors) {
  return colors
    .map(
      (color) =>
        `<span class = "color ${color} ${isDark(color) ? "dark" : ""}
        " style = "background: ${color};">${color}</span>`
    )
    .join("");
}

window.SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

function start() {
  //see if their browser supports
  if (!("SpeechRecognition" in window)) {
    console.log("Sorry your browser does not support seepch reco.");
    return;
  }
  console.log("Starting...");
  //make a new speech reco
  const recognition = new SpeechRecognition();
  recognition.continuous = true;
  recognition.interimResults = true;
  recognition.onresult = handleResult;
  recognition.start();
}
start();

colorsE1.innerHTML = displayColors(colorByLength);
