const gridContent = document.querySelectorAll(".grids");
let playerList = ["", "", "", "", "", "", "", "", ""];
const result = document.getElementById("result");
const container = document.querySelector(".Main-container");
const resetbtn = document.querySelector(".reset-btn");

resetbtn.addEventListener("click", () => console.log(window.location.reload()));

const winningList = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 4, 8],
  [2, 4, 6],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
];

let player = "O";
const playerTurn = (player) => {
  return player === "X" ? (player = "O") : (player = "X");
};

const addElements = (element, player) => {
  element.innerText = player;
  element.classList.add("grid-style");
  playerList.splice(element.id - 1, 1, player);
};

const checkResult = () => {
  let gameWon = false,
    playerWon = "";
  for (let i = 0; i < winningList.length; i++) {
    const winIndex = winningList[i];
    let a = playerList[winIndex[0]];
    let b = playerList[winIndex[1]];
    let c = playerList[winIndex[2]];
    if (a === "" || b === "" || c === "") {
      continue;
    }
    if (a === b && b === c) {
      gameWon = true;
      playerWon = a;
      break;
    }
  }

  if (gameWon) {
    container.style.filter = "blur(5px)";
    container.style.backgroundColor = "rgba(0,0,0,0.6)";
    resetbtn.classList.contains("display-btn")
      ? resetbtn.classList.remove("display-btn")
      : resetbtn.classList.add("display-btn");
    result.innerHTML = `Player ${playerWon} Won`;
  }
  if (!playerList.includes("")) {
    container.style.filter = "blur(5px)";
    container.style.backgroundColor = "rgba(0,0,0,0.6)";
    resetbtn.classList.contains("display-btn")
      ? resetbtn.classList.remove("display-btn")
      : resetbtn.classList.add("display-btn");
    result.innerHTML = `Match Draw`;
  }
};

gridContent.forEach((element) => {
  element.addEventListener("click", () => {
    player = playerTurn(player);
    addElements(element, player);
    checkResult();
  });
});
