var choices = ['Rock', 'Paper', 'Scissors'];

var body = document.body;
var playerChoice = '';
var cpuChoice = '';
var playerScore = 0; // Puntaje del jugador
var cpuScore = 0; // Puntaje de la CPU
var round = 1; // Contador de rondas
var totalRounds = 5; // Número total de rondas

// contenedor principal
var gameContainer = document.createElement('div');
gameContainer.classList.add('game-container');
body.appendChild(gameContainer);

// div para mostrar mensajes (elecciones y resultado)
var choicesDiv = document.createElement('div');
choicesDiv.innerHTML = `<p>Elige una opción para empezar el juego.</p>`;
gameContainer.appendChild(choicesDiv);

var resultDiv = document.createElement('div');
resultDiv.id = "resultDiv";
gameContainer.appendChild(resultDiv);

//contenedor para los botones
var buttonsContainer = document.createElement('div');
buttonsContainer.classList.add('buttons-container');
gameContainer.appendChild(buttonsContainer);

// div para mostrar el puntaje
var scoreDiv = document.createElement('div');
scoreDiv.id = "scoreDiv";
scoreDiv.innerHTML = `<p>Puntaje: Jugador: <strong>0</strong> | CPU: <strong>0</strong></p><p>Ronda: <strong>1/${totalRounds}</strong></p>`;
gameContainer.appendChild(scoreDiv);

var buttons = []; // array para almacenar las referencias de los botones
var restartButton = null; // referencia para el botón de reinicio

// función para generar botones
function generateChoiceButton(_choice) {
    var button = document.createElement('button');
    button.classList.add('choice-button');

    // asignar iconos según elección 
    var icon = '';
    if (_choice === 'Rock') {
        icon = '<i class="fas fa-hand-rock"></i>';
    } else if (_choice === 'Paper') {
        icon = '<i class="fas fa-hand-paper"></i>';
    } else if (_choice === 'Scissors') {
        icon = '<i class="fas fa-hand-scissors"></i>';
    }
    button.innerHTML = icon + "<br>" + _choice;

    button.addEventListener('click', function () {
        playerChoice = _choice;
        cpuChoice = randomPick(choices);

        console.log("Jugador:", playerChoice);
        console.log("CPU:", cpuChoice);

        updateChoices();
        checkWinner();
    });
    
    buttons.push(button); // agregar el botón al array de botones
    buttonsContainer.appendChild(button); // agregar el botón al contenedor
}

// crear botón para cada opción
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
        (playerChoice === 'Paper' && cpuChoice === 'Rock') ||
        (playerChoice === 'Rock' && cpuChoice === 'Scissors') ||
        (playerChoice === 'Scissors' && cpuChoice === 'Paper')
    ) {
        resultMessage = `<p>¡Has ganado esta ronda!</p>`;
        playerScore++; // sumar puntuación al jugador
    } else {
        resultMessage = `<p>¡Has perdido esta ronda!</p>`;
        cpuScore++; // sumar puntuación a la CPU
    }
    
    // actualizar puntuación y rondas
    updateScores();
    round++;
    
    // comprobar si ya se acabaron las rondas
    if (round > totalRounds) {
        endGame();
    } else {
        scoreDiv.innerHTML = `<p>Puntuación: Jugador: <strong>${playerScore}</strong> | CPU: <strong>${cpuScore}</strong></p><p>Ronda: <strong>${round}/${totalRounds}</strong></p>`;
    }
    
    resultDiv.innerHTML = resultMessage;
}

function updateScores() {
    scoreDiv.innerHTML = `<p>Puntuación: Jugador: <strong>${playerScore}</strong> | CPU: <strong>${cpuScore}</strong></p><p>Ronda: <strong>${round}/${totalRounds}</strong></p>`;
}

function endGame() {
    var finalMessage = '';
    if (playerScore > cpuScore) {
        finalMessage = `<p>¡Has ganado el juego!</p>`;
    } else if (playerScore < cpuScore) {
        finalMessage = `<p>¡La CPU ha ganado el juego!</p>`;
    } else {
        finalMessage = `<p>¡Es un empate al final del juego!</p>`;
    }
    
    resultDiv.innerHTML = finalMessage;
    
    // deshabilitar los botones después de terminar el juego usando el array de botones
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].disabled = true;
    }

    // crear botón de reinicio
    restartButton = document.createElement('button');
    restartButton.innerHTML = 'Reiniciar juego';
    restartButton.classList.add('restart-button');
    gameContainer.appendChild(restartButton);

    restartButton.addEventListener('click', function () {
        restartGame();
    });
}

function restartGame() {
    // reiniciar todas las variables
    playerScore = 0;
    cpuScore = 0;
    round = 1;

    // actualizar la puntuación y ronda
    updateScores();

    // habilitar los botones nuevamente usando el array de botones
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].disabled = false;
    }

    // limpiar el mensaje de resultado
    resultDiv.innerHTML = '';
    
    // eliminar el botón de reinicio usando la referencia almacenada
    if (restartButton) {
        restartButton.remove();
    }

    // actualizar la interfaz de elección
    choicesDiv.innerHTML = `<p>Elige una opción para empezar el juego.</p>`;
}
