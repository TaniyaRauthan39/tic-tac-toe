let buttons = document.querySelectorAll(".btn");
let reset = document.querySelector(".reset");
let newGame = document.querySelector(".new");
let wins = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [6, 7, 8],
  [0, 4, 8],
  [2, 4, 6],
];

let turn = "O";
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    if (turn == "O") {
      button.innerHTML = "O";
      turn = "X";
    } else {
      button.innerHTML = "X";
      turn = "O";
    }
    button.disabled = true;
    checkWinner();
  });
});

const checkWinner = () => {
  for (let pattern of wins) {
    let pos1 = buttons[pattern[0]].innerHTML;
    let pos2 = buttons[pattern[1]].innerHTML;
    let pos3 = buttons[pattern[2]].innerHTML;

    if (pos1 != "" && pos2 != "" && pos3 != "") {
      if (pos1 == pos2 && pos2 == pos3) {
        alert(`Winner is ${pos1}`);
      }
      else{
       
      }
    }
  }
};

// Reset

reset.addEventListener("click", () => {
  location.href = "tic-tac-toe.html";
});

// New game

newGame.addEventListener("click", () => {
  window.location = "tic-tac-toe.html";
});
