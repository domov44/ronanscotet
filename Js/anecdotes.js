const container = document.querySelector(".anecdotes");
const actualiserBtn = document.querySelector("#actualiser-anecdote");

function displayAnecdotes() {
fetch("Js/anecdotes.json?v=1.1")
.then((response) => response.json())
.then((data) => {
const categories = [...new Set(data.anecdotes.map(anecdote => anecdote.categorie))];
const randomCategory = categories[Math.floor(Math.random() * categories.length)];
const categoryAnecdotes = data.anecdotes.filter(
(anecdote) => anecdote.categorie === randomCategory && anecdote.vrai === "oui"
);
const randomIndex = Math.floor(Math.random() * categoryAnecdotes.length);
const selectedTrueAnecdote = categoryAnecdotes[randomIndex];
const remainingAnecdotes = data.anecdotes.filter(
(anecdote) => anecdote.categorie === randomCategory && anecdote.vrai === "non"
);
const selectedFalseAnecdotes = [];
for (let i = 0; i < 2; i++) {
const randomIndex = Math.floor(Math.random() * remainingAnecdotes.length);
selectedFalseAnecdotes.push(remainingAnecdotes.splice(randomIndex, 1)[0]);
}
const shuffledAnecdotes = [selectedTrueAnecdote, ...selectedFalseAnecdotes].sort(() => Math.random() - 0.5);
container.innerHTML = "";
shuffledAnecdotes.forEach((anecdote) => {
const div = document.createElement("div");
div.classList.add("anecdote");
div.dataset.vrai = anecdote.vrai;
const categorieP = document.createElement("p");
categorieP.classList.add("categorie");
categorieP.classList.add(`categorie-${anecdote.categorie.toLowerCase()}`);
categorieP.textContent = anecdote.categorie;
div.appendChild(categorieP);
const anecdoteP = document.createElement("p");
anecdoteP.textContent = anecdote.anecdote;
div.appendChild(anecdoteP);
container.appendChild(div);
});
isAnswered = false;
anecdotesClicked = false;
});
}

let isAnswered = false;
let anecdotesClicked = false;
let anecdotesCount = 0;
const audioSound = {
"vrai": "uploads/sonClavier/correct.mp3",
"faux": "uploads/sonClavier/faux.mp3"
};

function playSound(result) {
const audio = new Audio(audioSound[result]);
audio.play();
}

container.addEventListener("click", (event) => {
if (!anecdotesClicked) {
const anecdoteDiv = event.target.closest(".anecdote");
if (anecdoteDiv) {
const isTrue = anecdoteDiv.dataset.vrai === "oui";
anecdoteDiv.style.borderColor = isTrue ? "rgb(80, 227, 194)" : "#ff6d74";
anecdoteDiv.style.background = isTrue ? "rgb(80 227 194 / 10%)" : "rgb(250 179 169 / 10%)";
anecdoteDiv.removeAttribute("data-vrai");
anecdotesClicked = true;
const result = isTrue ? "vrai" : "faux";
playSound(result);
isAnswered = true;
anecdotesCount++;
if (anecdotesCount >= 3) {
actualiserBtn.style.display = "block";
}
}
}
});

actualiserBtn.addEventListener("click", () => {
  if (anecdotesClicked || !isAnswered) {
  displayAnecdotes();
  }
  });
  displayAnecdotes();

  