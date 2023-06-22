const playerChoose = document.querySelector("#player-choose");
const playerScore = document.querySelector("#player-score span");
const computerChoose = document.querySelector("#computer-choose");
const computerScore = document.querySelector("#computer-score span");
const movesVariants = document.querySelectorAll(".main__moves-variants-item");
const title = document.querySelector(".main__title");
const subtitle = document.querySelector(".main__subtitle");
let playerPoints = 0;
let computerPoints = 0;
const variants = ["✊", "✋", "✌"];

const generateComputerChoose = () => {
    computerChoose.textContent =
        variants[Math.floor(Math.random() * variants.length)];
};

const changePlayerScore = () => {
    playerPoints += 1;
    playerScore.textContent = playerPoints;
    title.textContent = "You won!";
};

const changeComputerScore = () => {
    computerPoints += 1;
    computerScore.textContent = computerPoints;
    title.textContent = "You lost!";
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
