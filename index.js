let score = 0;
let round = 0;

const setListeners = () => {
  const paper = document.getElementsByClassName("startPapper")[0];
  const scissor = document.getElementsByClassName("startScissor")[0];
  const rock = document.getElementsByClassName("startRock")[0];
  const nextRoundBtn = document.getElementById("nextRound");
  let userChoice;
  let appChoice;

  nextRoundBtn.addEventListener("click", function (e) {
    e.preventDefault;
    nextRound();
    round += 1;
  });

  paper.addEventListener("click", function (e) {
    userChoice = getChoiceNumber(e.target.classList[0]);
    appChoice = getRandomChoice();
    showChoices(userChoice, appChoice);

    console.log(e.target.className);
    console.log(userChoice, appChoice);
    getWinner(userChoice, appChoice);
  });

  scissor.addEventListener("click", function (e) {
    userChoice = getChoiceNumber(e.target.classList[0]);
    appChoice = getRandomChoice();

    showChoices(userChoice, appChoice);

    getWinner(userChoice, appChoice);
  });
  rock.addEventListener("click", function (e) {
    userChoice = getChoiceNumber(e.target.classList[0]);
    appChoice = getRandomChoice();
    showChoices(userChoice, appChoice);

    console.log(e.target.classList[0]);

    getWinner(userChoice, appChoice);
  });
};

const getChoiceNumber = (choice) => {
  let choiceNum;

  if (choice === "rock") {
    choiceNum = 0;

    return choiceNum;
  } else if (choice === "papper") {
    choiceNum = 1;

    return choiceNum;
  } else if (choice === "scissor") {
    choiceNum = 2;

    return choiceNum;
  }
};

const getRandomChoice = () => {
  const options = ["papper", "rock", "scissor"];

  let choice = options[Math.floor(Math.random() * options.length)];
  console.log("choice de grc", choice);

  return getChoiceNumber(choice);
};

const getWinner = (userChoice, appChoice) => {
  let winner = "";
  let results = ["", "", ""];
  const winnerTitle = document.getElementById("winner");

  let userChoiceArr = ["rock", "paper", "scissor"];
  let appChoiceArr = ["paper", "rock", "scissor"];

  results[0] = [null, false, true];
  results[1] = [true, null, false];
  results[2] = [true, false, null];

  if (results[userChoice][appChoice] == null) {
    changeScore("draw");
    showScore();
    winnerTitle.innerHTML = "EMPATE";
  } else if (results[userChoice][appChoice] === true) {
    changeScore("win");
    showScore();
    winnerTitle.innerHTML = "GANASTE";
  } else {
    changeScore("loose");
    showScore();
    winnerTitle.innerHTML = "PERDISTE";
  }
};

const showChoices = (userChoice, appChoice) => {
  const userRock = document.querySelector(".rockUser");
  const userPaper = document.querySelector(".papperUser");
  const userScissors = document.querySelector(".scissorUser");

  const computerRock = document.querySelector(".rockComputer");
  const computerScissors = document.querySelector(".scissorComputer");
  const computerPaper = document.querySelector(".papperComputer");

  const startButtons = document.querySelector("#start-buttons");
  const result = document.getElementById("result");

  const nextRoundBtn = document.querySelector(".nextRound");

  console.log(userChoice, appChoice);

  // Showing User pick

  if (userChoice === 0) {
    userPaper.classList.add("hidden");
    userScissors.classList.add("hidden");

    startButtons.classList.add("hidden");

    result.classList.remove("hidden");
    nextRoundBtn.classList.remove("hidden");

    result.classList.add("show");
  } else if (userChoice === 1) {
    userRock.classList.add("hidden");
    userScissors.classList.add("hidden");

    startButtons.classList.add("hidden");

    result.classList.remove("hidden");
    nextRoundBtn.classList.remove("hidden");
    result.classList.add("show");
  } else if (userChoice === 2) {
    userRock.classList.add("hidden");
    userPaper.classList.add("hidden");

    startButtons.classList.add("hidden");

    result.classList.remove("hidden");
    nextRoundBtn.classList.remove("hidden");

    result.classList.add("show");
  }

  // Showing CPU pick

  if (appChoice === 0) {
    computerPaper.classList.add("hidden");
    computerScissors.classList.add("hidden");
  } else if (appChoice === 1) {
    computerRock.classList.add("hidden");
    computerScissors.classList.add("hidden");
  } else if (appChoice === 2) {
    computerRock.classList.add("hidden");
    computerPaper.classList.add("hidden");
  }
};

const changeScore = (result) => {
  console.log(score);
  if (result == "win") {
    return (score += 10);
  } else if (result == "loose") {
    return (score -= 10);
  } else if (result == "draw") {
    return score;
  }
};

const showScore = () => {
  scoreBoard = document.getElementById("scoreBoard");

  scoreBoard.innerHTML = score;
};

const nextRound = () => {
  const startButtons = document.querySelector("#start-buttons");
  const round = d;
  if (round >= 3) {
    console.log("terminado");
  } else {
    startButtons.classList.remove("hidden");
    result.classList.add("hidden");
  }
};

setListeners();
