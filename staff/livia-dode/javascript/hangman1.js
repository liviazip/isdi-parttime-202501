var palabras = ["dromedario", "musical", "torno", "rotulador", "farola"];
var palabraSecreta = palabras[Math.floor(Math.random() * palabras.length)].toLowerCase();
var letrasAdivinadas = [];
var vidas = 5;
var cancelado = false; // detectar si el usuario cancela el juego

// verificar si aún quedan letras por adivinar
function quedanLetras() {
  for (var i = 0; i < palabraSecreta.length; i++) {
    if (letrasAdivinadas.indexOf(palabraSecreta[i]) === -1) {
      return true; // cuando le quedan letras por adivinar
    }
  }
  return false; // cuando ha adivinado todas las letras 
}

// bucle principal del juego
while (vidas > 0 && quedanLetras() && !cancelado) {
  // construir la cadena que muestra el estado actual de la palabra
  var mostrar = "";
  for (var i = 0; i < palabraSecreta.length; i++) {
    if (letrasAdivinadas.indexOf(palabraSecreta[i]) !== -1) {
      mostrar += palabraSecreta[i] + " "; // muestra la letra si fue adivinada
    } else {
      mostrar += "_ "; // muestra un guion bajo si la letra no ha sido adivinada
    }
  }

  // mostrar el estado actual y pedir al jugador que ingrese una letra
  var input = prompt("Adivina la palabra:\n" + mostrar + "\nVidas restantes: " + vidas + "\nIngresa una letra:");

  // si el jugador cancela (input es null), se detiene el juego
  if (input === null) {
    cancelado = true;
  } else {
    var letra = input.toLowerCase()[0]; // convertir la entrada a minúscula y tomar solo la primera letra

    // validar la entrada: debe ser una letra válida
    if (input === "" || !isNaN(letra)) {
      alert("Por favor, introduce una letra válida.");
    } else {
      // si la letra no ha sido introducida antes, se añade al array de letras adivinadas
      if (letra && letrasAdivinadas.indexOf(letra) === -1) {
        letrasAdivinadas.push(letra);

        // si la letra no está en la palabra secreta, se restan vidas
        if (palabraSecreta.indexOf(letra) === -1) {
          vidas--;
        }
      }
    }
  }
}

// mensaje final 
if (cancelado) {
  alert("Eres libre de irte.");
} else if (!quedanLetras()) {
  alert("Enhorabuena, adivinaste la palabra!");
} else {
  alert("Perdiste. La palabra era: " + palabraSecreta);
}
