var choices = ['Rock', 'Paper', 'Scissors'];

var body = document.body;
var playerChoice = '';
var cpuChoice = '';
var playerScore = 0; // Puntaje del jugador
var cpuScore = 0; // Puntaje de la CPU
var round = 1; // Contador de rondas
var totalRounds = 5; // Número total de rondas

// Contenedor principal
var gameContainer = document.createElement('div');
gameContainer.classList.add('game-container');
body.appendChild(gameContainer);

// Div para mostrar mensajes (elecciones y resultado)
var choicesDiv = document.createElement('div');
choicesDiv.innerHTML = `<p>Elige una opción para empezar el juego.</p>`;
gameContainer.appendChild(choicesDiv);

var resultDiv = document.createElement('div');
resultDiv.id = "resultDiv";
gameContainer.appendChild(resultDiv);

// **Nuevo contenedor para los botones**
var buttonsContainer = document.createElement('div');
buttonsContainer.classList.add('buttons-container');
gameContainer.appendChild(buttonsContainer);

// Div para mostrar el puntaje
var scoreDiv = document.createElement('div');
scoreDiv.id = "scoreDiv";
scoreDiv.innerHTML = `<p>Puntaje: Jugador: <strong>0</strong> | CPU: <strong>0</strong></p><p>Ronda: <strong>1/${totalRounds}</strong></p>`;
gameContainer.appendChild(scoreDiv);

var buttons = []; // Array para almacenar las referencias de los botones
var restartButton = null; // Referencia para el botón de reinicio

// Función para generar botones
function generateChoiceButton(_choice) {
    var button = document.createElement('button');
    button.classList.add('choice-button');

    // Asignar iconos según la elección (usa FontAwesome o similar)
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
    
    buttons.push(button); // Agregar el botón al array de botones
    buttonsContainer.appendChild(button); // Agregar el botón al contenedor
}

// Crear botón para cada opción
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
        playerScore++; // Sumar puntaje al jugador
    } else {
        resultMessage = `<p>¡Has perdido esta ronda!</p>`;
        cpuScore++; // Sumar puntaje a la CPU
    }
    
    // Actualizar puntajes y rondas
    updateScores();
    round++;
    
    // Comprobar si ya se acabaron las rondas
    if (round > totalRounds) {
        endGame();
    } else {
        scoreDiv.innerHTML = `<p>Puntaje: Jugador: <strong>${playerScore}</strong> | CPU: <strong>${cpuScore}</strong></p><p>Ronda: <strong>${round}/${totalRounds}</strong></p>`;
    }
    
    resultDiv.innerHTML = resultMessage;
}

function updateScores() {
    scoreDiv.innerHTML = `<p>Puntaje: Jugador: <strong>${playerScore}</strong> | CPU: <strong>${cpuScore}</strong></p><p>Ronda: <strong>${round}/${totalRounds}</strong></p>`;
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
    
    // Deshabilitar los botones después de terminar el juego usando el array de botones
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].disabled = true;
    }

    // Crear botón de reinicio
    restartButton = document.createElement('button');
    restartButton.innerHTML = 'Reiniciar juego';
    restartButton.classList.add('restart-button');
    gameContainer.appendChild(restartButton);

    restartButton.addEventListener('click', function () {
        restartGame();
    });
}

function restartGame() {
    // Reiniciar todas las variables
    playerScore = 0;
    cpuScore = 0;
    round = 1;

    // Actualizar el puntaje y ronda
    updateScores();

    // Habilitar los botones nuevamente usando el array de botones
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].disabled = false;
    }

    // Limpiar el mensaje de resultado
    resultDiv.innerHTML = '';
    
    // Eliminar el botón de reinicio usando la referencia almacenada
    if (restartButton) {
        restartButton.remove();
    }

    // Actualizar la interfaz de elección
    choicesDiv.innerHTML = `<p>Elige una opción para empezar el juego.</p>`;
}
