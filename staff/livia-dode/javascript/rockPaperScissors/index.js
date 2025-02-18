var choices = ['Rock', 'Paper', 'Scissors'];

var body = document.body;
var playerChoice = '';
var cpuChoice = '';

var gameContainer = document.createElement('div');
var choicesDiv = document.createElement('div'); // nuevo div para mostrar elecciones
var resultDiv = document.createElement('div');

choicesDiv.innerHTML = `<p>Elige una opción para empezar el juego.</p>`;
body.appendChild(gameContainer);
gameContainer.classList.add('game-container');

gameContainer.appendChild(choicesDiv);
gameContainer.appendChild(resultDiv);

function generateChoiceButton(_choice) {
    var button = document.createElement('button');
    button.classList.add('choice-button');
    button.textContent = _choice;

    button.addEventListener('click', function () {
        playerChoice = _choice;
        cpuChoice = randomPick(choices); // elige aleatoriamente en cada ronda

        console.log("El jugador ha elegido:", playerChoice);
        console.log("La CPU ha elegido:", cpuChoice);

        updateChoices();
        checkWinner();
    });
    gameContainer.appendChild(button);
}

for (var i = 0; i < choices.length; i++) {
    generateChoiceButton(choices[i]);
}

function randomPick(_choice) {
    return _choice[Math.floor(Math.random() * _choice.length)];
}

function updateChoices() {
    choicesDiv.innerHTML = `<p>Jugador: <strong>${playerChoice}</strong> | CPU: <strong>${cpuChoice}</strong></p>`;
}

function checkWinner() {
    var resultMessage = '';
    if (playerChoice === cpuChoice) {
        resultMessage = `<p>¡Empate!</p>`;
    } else if (
        (playerChoice === 'paper' && cpuChoice === 'rock') ||
        (playerChoice === "rock" && cpuChoice === "scissors") ||
        (playerChoice === "scissors" && cpuChoice === "paper")
    ) {
        resultMessage = `<p>¡Has ganado!</p>`;
    } else {
        resultMessage = `<p>¡Has perdido!</p>`;
    }
    resultDiv.innerHTML = resultMessage;
}