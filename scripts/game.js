function resetGame() {
  gameOverElement.style.display = "none";

  currentClick = 0;
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      gameData[i][j] = 0;
    }
  }

  const gameBoardLiElements = gameBoardElement.children;

  for (gameBoardLiElement of gameBoardLiElements) {
    gameBoardLiElement.classList.remove("disabled");
    gameBoardLiElement.textContent = "";
  }
  hasWinner = false;
}

function gameOver(playerId) {
  if (playerId === -1) {
    gameOverElement.style.display = "block";
    gameOverElement.firstElementChild.textContent = "It's draw!";
  } else {
    gameOverElement.style.display = "block";
    winnerNameElement.textContent = playersData[playerId - 1].name;
  }
}

function selectGameField({ target }) {
  if (target.nodeName !== "LI" || hasWinner) {
    return;
  }

  const selectColumn = target.dataset.col - 1;
  const selectRow = target.dataset.row - 1;

  if (gameData[selectRow][selectColumn] > 0) {
    return;
  }

  target.textContent = playersData[activePlayer - 1].symbol;
  target.classList.add("disabled");

  gameData[selectRow][selectColumn] = activePlayer;

  if (activePlayer === 1) {
    activePlayer = 2;
  } else {
    activePlayer = 1;
  }

  activePlayerElement.textContent = playersData[activePlayer - 1].name;

  currentClick++;

  const gameResult = checkGameResult();
  if (gameResult !== undefined) {
    gameOver(gameResult);
    hasWinner = true;
  }

  console.log(gameData);
}

function checkGameResult() {
  for (let i = 0; i < 3; i++) {
    if (
      gameData[i][0] > 0 &&
      gameData[i][0] === gameData[i][1] &&
      gameData[i][1] === gameData[i][2]
    ) {
      return gameData[i][0];
    }
  }

  for (let i = 0; i < 3; i++) {
    if (
      gameData[0][i] > 0 &&
      gameData[0][i] === gameData[1][i] &&
      gameData[1][i] === gameData[2][i]
    ) {
      return gameData[0][i];
    }
  }

  if (
    gameData[0][0] > 0 &&
    gameData[0][0] === gameData[1][1] &&
    gameData[1][1] === gameData[2][2]
  ) {
    return gameData[0][0];
  }

  if (
    gameData[2][0] > 0 &&
    gameData[2][0] === gameData[1][1] &&
    gameData[1][1] === gameData[0][2]
  ) {
    return gameData[2][0];
  }

  if (currentClick === 9) {
    return -1;
  }
}
