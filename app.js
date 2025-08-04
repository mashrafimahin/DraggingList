// Taking variables
const userDisplay = document.querySelector('#player-choice');
const pcDisplay = document.querySelector('#computer-choice');
const waiting = document.querySelector('#vs-text');
const icons = document.querySelectorAll('.select');
const result = document.querySelector('.result-text');

// Audio file creation
const win = new Audio('sounds/win.wav');
const lose = new Audio('sounds/lose.wav');

// Rules
const rules = {
    rock : 'scissors',
    paper : 'rock',
    scissors : 'paper'
}

// Image links
const imageLinks = {
    rock : 'images/hand.png',
    paper : 'images/hand-paper.png',
    scissors : 'images/two.png'
}

// Main function
icons.forEach(icon => {
    icon.addEventListener('click' , (e) => {
        
        // user input data
        let userInput = e.target.dataset.choice;
        let userInputSource = imageLinks[userInput];
        userDisplay.src = userInputSource;

        // computer data
        let randomSource = Math.floor(Math.random() * 3);
        let values = Object.keys(imageLinks);
        let computerOutput = values[randomSource];
        pcDisplay.src = imageLinks[computerOutput];

        // core logic
        if (computerOutput === userInput) {
            waiting.textContent = '🤝 Game Tied';
            result.textContent = 'Try Again';
            result.style.color = '#ffc107';
        }
        else if (rules[userInput] === computerOutput) {
            waiting.textContent = '✔️ Correct';
            result.textContent = 'Congratulations';
            result.style.color = '#008622';
            win.play();
        }
        else {
            waiting.textContent = '❌ Wrong';
            result.textContent = 'Try Again';
            result.style.color = '#f00';
            lose.play();
        }
    })
})
