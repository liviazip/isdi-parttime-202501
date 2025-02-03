var isGameOn = confirm('¿Quieres jugar a un juego?');

if (isGameOn) {
    guessNumber();
} else {
    alert('Hasta la próxima!');
}

function guessNumber() {
	var minNumber = 1;
	var maxNumber = 100;
    var secretNumber = Math.floor(Math.random() * maxNumber - minNumber + 1) + minNumber; 
    var playerGuess = null;
    var attempts = 0; 
 
while (playerGuess !== secretNumber) {
        var input = prompt('¿En qué número crees que estoy pensando?');      
        if (input === null) {
            alert('Juego cancelado. Bye!');
            return;
        }

        playerGuess = Number(input);
        attempts++;

 		if (isNaN(playerGuess)) {
            alert('Por favor, inserta un número válido.');
        } else if (playerGuess < secretNumber) {
            alert('Demasiado bajo, intenta otra vez.');
        } else if (playerGuess > secretNumber) {
            alert('Demasiado alto, intenta otra vez.');
        } else {
            alert(`Enhorabuena! Has acertado en ${attempts} intentos.`);
        }
    }
}
