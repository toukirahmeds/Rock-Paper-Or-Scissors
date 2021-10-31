const choices = ['rock', 'paper', 'scissors'];

const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    switch (userInput) {
        case 'rock':
        case 'paper':
        case 'scissors':
        case 'bomb':
            return userInput;
        default:
            return "No item matched";
    }
};

const getComputerChoice = () => choices[Math.floor(Math.random() * 3)];

const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === 'bomb') {
        return "User has won.";
    }

    if (userChoice === computerChoice) {
        return "The game was a tie.";
    }

    if (userChoice === choices[0]) {
        if (computerChoice === choices[1]) {
            return "Computer has won.";
        }
        return "User has won.";
    } else if (userChoice === choices[1]) {
        if (computerChoice === choices[2]) {
            return "Computer has won."
        }
        return "User has won.";
    } else if (userChoice === choices[2]) {
        if (computerChoice === choices[0]) {
            return "Computer has won."
        }
        return "User has won."
    }
}

const playGame = () => {
    const userChoice = getUserChoice('bomb');
    const computerChoice = getComputerChoice();
    console.log(determineWinner(userChoice, computerChoice));
}

playGame();
