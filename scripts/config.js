function editPlayerName(e) {
  editedPlayer = +e.target.dataset.playerid;
  playerConfigOverlayElement.style.display = "block";
  backDropElement.style.display = "block";
}

function closePlayerConfig() {
  playerConfigOverlayElement.style.display = "none";
  backDropElement.style.display = "none";
  overlayFormElement.firstElementChild.lastElementChild.value = "";
}

function savePlayerName(e) {
  e.preventDefault();
  const formData = new FormData(e.target);
  const enteredPlayerName = formData.get("playername").trim();

  if (!enteredPlayerName) {
    e.target.firstElementChild.classList.add("error");
    errorOutputElement.textContent = "Plaese enter a valid name!";
    return;
  }

  const updatePlayerElement = document.getElementById(
    "player-" + editedPlayer + "-data"
  );

  updatePlayerElement.firstElementChild.textContent = enteredPlayerName;

  playersData[editedPlayer - 1].name = enteredPlayerName;

  if (playersData[0].name === playersData[1].name) {
    alert("Please choose other name!");
    return;
  }

  closePlayerConfig();
}

function startGame() {
  if (!playersData[0].name || !playersData[1].name) {
    alert("Please choose players name!");
    return;
  }
  resetGame();

  activePlayerElement.textContent = playersData[activePlayer - 1].name;
  activeGameElement.style.display = "block";
}
