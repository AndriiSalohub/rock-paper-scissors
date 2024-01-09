const playerChoose = document.querySelector("#player-choose");
const playerScore = document.querySelector("#player-score span");

const computerChoose = document.querySelector("#computer-choose");
const computerScore = document.querySelector("#computer-score span");

const movesVariants = document.querySelectorAll(".main__moves-variants_item");

const title = document.querySelector(".main__title");
const subtitle = document.querySelector(".main__subtitle");

const resultModal = document.querySelector(".wrapper");
const result = document.querySelector(".result");
const resultModalTitle = document.querySelector(".result__title");

const playAgainBtn = document.querySelector(".result__btn");

let playerPoints = 0;
let computerPoints = 0;
const variants = ["✊", "✋", "✌"];

const generateComputerChoose = () => {
    computerChoose.textContent =
        variants[Math.floor(Math.random() * variants.length)];
};

const escapePlayAgain = () => {
    if (resultModal.style.display === "block") {
        document.addEventListener(
            "keyup",
            (e) => {
                if (e.code === "Escape") {
                    playAgain();
                }
            },
            { once: true }
        );
    }
};

const changePlayerScore = () => {
    playerPoints += 1;
    playerScore.textContent = playerPoints;
    title.textContent = "You won!";
    if (playerPoints === 5) {
        resultModal.style.display = "block";
        resultModalTitle.textContent = "You won!";
    }
    escapePlayAgain();
};

const changeComputerScore = () => {
    computerPoints += 1;
    computerScore.textContent = computerPoints;
    title.textContent = "You lost!";
    if (computerPoints === 5) {
        resultModal.style.display = "block";
        resultModalTitle.textContent = "You lost!";
    }
    escapePlayAgain();
};

const compareChoose = (playerChoose, computerChoose) => {
    if (playerChoose === "✊" && computerChoose === "✋") {
        changeComputerScore();
        subtitle.textContent = "Rock is beaten by paper";
    } else if (computerChoose === "✊" && playerChoose === "✋") {
        changePlayerScore();
        subtitle.textContent = "Paper beats rock";
    } else if (playerChoose === "✌" && computerChoose === "✋") {
        changePlayerScore();
        subtitle.textContent = "Scissors beats paper";
    } else if (computerChoose === "✌" && playerChoose === "✋") {
        changeComputerScore();
        subtitle.textContent = "Paper is beaten by scissors";
    } else if (playerChoose === "✊" && computerChoose === "✌") {
        changePlayerScore();
        subtitle.textContent = "Rock beats scissors";
    } else if (computerChoose === "✊" && playerChoose === "✌") {
        changeComputerScore();
        subtitle.textContent = "Scissors is beaten by rock";
    } else if (playerChoose === "✊" && computerChoose === "✊") {
        title.textContent = "It's a tie!";
        subtitle.textContent = "Rock ties with rock";
    } else if (playerChoose === "✋" && computerChoose === "✋") {
        title.textContent = "It's a tie!";
        subtitle.textContent = "Paper ties with paper";
    } else {
        title.textContent = "It's a tie!";
        subtitle.textContent = "Scissors ties with scissors";
    }
};

movesVariants.forEach((move) => {
    move.addEventListener("click", () => {
        switch (move.getAttribute("id")) {
            case "rock":
                playerChoose.textContent = "✊";
                generateComputerChoose();
                compareChoose(
                    playerChoose.textContent,
                    computerChoose.textContent
                );
                break;
            case "paper":
                playerChoose.textContent = "✋";
                generateComputerChoose();
                compareChoose(
                    playerChoose.textContent,
                    computerChoose.textContent
                );
                break;
            case "scissors":
                playerChoose.textContent = "✌";
                generateComputerChoose();
                compareChoose(
                    playerChoose.textContent,
                    computerChoose.textContent
                );
                break;
        }
    });
});

const playAgain = () => {
    playerChoose.textContent = "?";
    computerChoose.textContent = "?";
    playerScore.textContent = "0";
    computerScore.textContent = "0";
    title.textContent = "Choose your weapon";
    subtitle.textContent = "First to score 5 points wins the game";
    resultModal.style.display = "";
    playerPoints = 0;
    computerPoints = 0;
};

playAgainBtn.addEventListener("click", () => {
    playAgain();
});

resultModal.addEventListener("click", (e) => {
    if (e.target !== result) {
        playAgain();
    }
});
