const choices = ["piedra", "papel", "tijera"];
let playerScore = 0;
let computerScore = 0;

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
const puntajeJugador = document.getElementById("puntaje_jugador");
const puntajePc = document.getElementById("puntaje_pc");

piedraBtn.addEventListener("click", function () {
  const playerChoice = "piedra";
  const computerSelection = getComputerChoice();
  const resultado = playRound(playerChoice, computerSelection);
  if (resultado === "Ganaste") {
    playerScore = playerScore + 1;
  } else if (resultado === "Perdiste") {
    computerScore = computerScore + 1;
  }
  resultadoTexto.textContent = resultado;
  puntajeJugador.textContent = playerScore;
  puntajePc.textContent = computerScore;
});

tijeraBtn.addEventListener("click", function () {
  const playerChoice = "tijera";
  const computerSelection = getComputerChoice();
  const resultado = playRound(playerChoice, computerSelection);
  if (resultado === "Ganaste") {
    playerScore = playerScore + 1;
  } else if (resultado === "Perdiste") {
    computerScore = computerScore + 1;
  }
  resultadoTexto.textContent = resultado;
  puntajeJugador.textContent = playerScore;
  puntajePc.textContent = computerScore;
});

papelBtn.addEventListener("click", function () {
  const playerChoice = "papel";
  const computerSelection = getComputerChoice();
  const resultado = playRound(playerChoice, computerSelection);
  if (resultado === "Ganaste") {
    playerScore = playerScore + 1;
  } else if (resultado === "Perdiste") {
    computerScore = computerScore + 1;
  }
  resultadoTexto.textContent = resultado;
  puntajeJugador.textContent = playerScore;
  puntajePc.textContent = computerScore;
});
