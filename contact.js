const input = document.getElementById("input");
const keys = document.querySelectorAll(".key");
const clear = document.getElementById("clear");
const submit = document.getElementById("submit");
const screen = document.querySelector(".screen");

let code = "";
let tries = 0;

const audioFiles = {
  "1": "uploads/sonClavier/touche1.mp3",
  "2": "uploads/sonClavier/touche2.mp3",
  "3": "uploads/sonClavier/touche3.mp3",
  "4": "uploads/sonClavier/touche4.mp3",
  "5": "uploads/sonClavier/touche5.mp3",
  "6": "uploads/sonClavier/touche6.mp3",
  "7": "uploads/sonClavier/touche7.mp3",
  "8": "uploads/sonClavier/touche8.mp3",
  "9": "uploads/sonClavier/touche9.mp3",
  "0": "uploads/sonClavier/touche0.mp3",
  "clear": "uploads/sonClavier/effacer.mp3",
  "submit": "uploads/sonClavier/valider.mp3",
  "vrai": "uploads/sonClavier/correct.mp3",
  "faux": "uploads/sonClavier/faux.mp3"
};

function playAudio(key) {
  const audio = new Audio(audioFiles[key]);
  audio.play();
}

keys.forEach(key => {
  key.addEventListener("click", () => {
    if (code.length < 4) {
      code += key.value;
      input.textContent = code;
      input.style.fontSize = '30px';
      playAudio(key.value); // jouer l'audio correspondant à la touche pressée
    }
  });
});

clear.addEventListener("click", () => {
  code = "";
  input.style.color='#fff';
  input.textContent = "";
  playAudio("clear"); // jouer l'audio pour le bouton clear
});

submit.addEventListener("click", () => {
  tries++;
  // félicitation tu as trouvé mon code secret
  if (code === "7845") {
    input.textContent = "Code correct, voici mon numéro : 0604499738";
    input.style.color='rgb(80, 227, 194)';
    input.style.fontSize = '15px';
    setTimeout(function(){
      playAudio("vrai");
      }, 300);
      }
  
  else if (tries === 3) {
    input.textContent = "Cherche un peu au lieu de tester au hasard";
    input.style.color='#c6a1ff';
    input.style.fontSize = '20px';
    setTimeout(function(){
      playAudio("faux");
      }, 300);
      }
  
  else {
    input.textContent = "Code incorrect";
    input.style.color='#ff6d74';
    input.style.fontSize = '20px';
    setTimeout(function(){
      playAudio("faux");
      }, 300);
      }

  playAudio("submit"); // jouer l'audio pour le bouton submit
});

