let editedPlayer = 0;
let activePlayer = 1;
let currentClick = 0;
let hasWinner = false;

const playersData = [
  {
    name: "",
    symbol: "X",
  },
  {
    name: "",
    symbol: "O",
  },
];

const gameData = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
];

const editPlayersBtn1Element = document.querySelector("#edit-player-1-btn");
const editPlayersBtn2Element = document.querySelector("#edit-player-2-btn");
const backDropElement = document.querySelector("#backdrop");
const playerConfigOverlayElement = document.querySelector("#config-overlay");
const overlayCancelBtnElement = document.querySelector("#cancel-config-btn");
const overlayFormElement = document.querySelector("form");
const errorOutputElement = document.querySelector("#config-errors");

const startGameBtnElement = document.querySelector("#start-game-btn");
const activeGameElement = document.querySelector("#active-game");
const activePlayerElement = document.getElementById("active-player-name");
const gameOverElement = document.querySelector("#game-over");
const winnerNameElement = document.querySelector("#winner-name");

const gameBoardElement = document.getElementById("game-board");

// Events
editPlayersBtn1Element.addEventListener("click", editPlayerName);
editPlayersBtn2Element.addEventListener("click", editPlayerName);
overlayCancelBtnElement.addEventListener("click", closePlayerConfig);
backDropElement.addEventListener("click", closePlayerConfig);
overlayFormElement.addEventListener("submit", savePlayerName);

startGameBtnElement.addEventListener("click", startGame);

gameBoardElement.addEventListener("click", selectGameField);
