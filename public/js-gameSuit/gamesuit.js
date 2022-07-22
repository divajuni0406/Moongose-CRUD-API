// Import files
import { GameStart } from "./GameStart.js";
import { Action } from "./Action.js";

// Call function
const action = new Action();
const gameStart = new GameStart();

// Random Pick Manipulation Computer
const randomManipulation = () => {
  let comBrain = ["rock", "scissors", "paper"];
  let i = 0;
  let countArray = comBrain.length;
  let startDateTime = new Date().getTime();
  setInterval(() => {
    if (new Date().getTime() - startDateTime > 3000) {
      clearInterval;
      return;
    }
    action.removeClassActive();
    if (i === countArray) {
      i = 0;
    }

    let element = document.getElementById(comBrain[i]);
    element.classList.add("active");
    i++;
  }, 100);
};

// Human Option and Main Function
function pick(playerOption) {
  gameStart.playerOption(playerOption);
  randomManipulation();
  action.buttonDisabled();
  action.resetButtonDisabled();
  let playerOptionElement = document.getElementById(playerOption + "-p");
  playerOptionElement.classList.add("activePlayer");
  let textElement = document.getElementById("textVS");
  textElement.innerHTML = "Loading...";
  textElement.classList.add("active-text-win");
  setTimeout(function () {
    action.removeClassActive();
    action.resetButtonDisabled1();
    const comOption = gameStart.comOption();
    let comOptionsElement = document.getElementById(comOption);
    comOptionsElement.classList.add("active");
    const finalResult = gameStart.winner(playerOption, comOption);
    let textElement = document.getElementById("textVS");
    textElement.innerHTML = finalResult;
    textElement.classList.add("active-text-win1");
  }, 3000);
}

// Add Onclick of PlayerChoice
const playerOption = document.querySelectorAll(".playerChoice button");
playerOption.forEach((value) => {
  document.querySelector("." + value.classList[2]).onclick = () => {
    pick(value.classList[2]);
  };
});

// Reset Button Function
const resetButton = document.querySelector(".reset-button");
resetButton.onclick = () => {
  action.removeClassActive();
  action.removeClassActiveUser();
  action.resetButton();
};
