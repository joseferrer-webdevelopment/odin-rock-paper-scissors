const choices = ["piedra", "papel", "tijera"];

function getComputerChoice() {
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function playRound(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    return "Empate";
  }

  if (playerChoice === "piedra" && computerChoice === "tijera") {
    return "Ganaste";
  }

  if (playerChoice === "papel" && computerChoice === "piedra") {
    return "Ganaste";
  }

  if (playerChoice === "tijera" && computerChoice === "papel") {
    return "Ganaste";
  }

  return "Perdiste";
}

const piedraBtn = document.getElementById("piedra");
const tijeraBtn = document.getElementById("tijera");
const papelBtn = document.getElementById("papel");
const resultadoTexto = document.getElementById("resultado");

piedraBtn.addEventListener("click", function () {
  const playerChoice = "piedra";
  const computerSelection = getComputerChoice();
  resultadoTexto.textContent = playRound(playerChoice, computerSelection);
});

tijeraBtn.addEventListener("click", function () {
  const playerChoice = "tijera";
  const computerSelection = getComputerChoice();
  resultadoTexto.textContent = playRound(playerChoice, computerSelection);
});

papelBtn.addEventListener("click", function () {
  const playerChoice = "papel";
  const computerSelection = getComputerChoice();
  resultadoTexto.textContent = playRound(playerChoice, computerSelection);
});
