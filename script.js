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

return "Perdiste"

}

