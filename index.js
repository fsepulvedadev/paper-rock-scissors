const setListeners = () => {
  const paper = document.querySelector(".papper");
  const scissor = document.querySelector(".scissor");
  const rock = document.querySelector(".rock");

  paper.addEventListener("click", function (e) {
    console.log(e.target.className);
  });

  scissor.addEventListener("click", function (e) {
    console.log(e.target.className);
  });
  rock.addEventListener("click", function (e) {
    console.log(e.target.className);
  });
};

const getRandomChoice = () => {
  const options = ["paper", "rock", "scisors"];

  let choice = options[Math.floor(Math.random() * options.length)];

  console.log(choice);
  return choice;
};

const getWinner = (userChoice, appChoice) => {
  let winner = "";

  let userChoiceArr = ["rock", "paper", "scissor"];
  let appChoiceArr = ["paper", "rock", "scissor"][(null, false, true)][
    (true, null, false)
  ][(true, false, null)];

  for (let index = 0; index < 2; index++) {
    userChoiceArr[i];
  }
};

getRandomChoice();
setListeners();
