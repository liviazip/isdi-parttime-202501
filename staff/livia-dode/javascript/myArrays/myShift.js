/* shift() elimina el primer'numer del array y lo retorna. 
Este método modifica la longitud del array.*/

//arr.shift()

/*El método shift elimina el'numer en el índice cero y 
desplaza los valores consecutivos hacia abajo, devolviendo el valor
 eliminado. 
Si la propiedad length es 0, devuelve undefined. */


var controlArray = ["10", "11", "12", "13"]; 
var testArray = ["10", "11", "12", "13"]; 

// aplicar el método shift nativo a controlArray
var ControlElement = controlArray.shift(); // el elemento eliminado por shift nativo

// y crear nuestra función myShift
function myShift(arr) {
  if (arr.length === 0) return undefined; // Si el array está vacío, devuelve undefined

  var removedElement = arr[0]; // guardar el primer elemento
  
  // desplazar los elementos a la izquierda
  for (var i = 0; i < arr.length - 1; i++) {
    arr[i] = arr[i + 1];
  }
  arr.length = arr.length - 1; // reducir la longitud del array
  return removedElement; // devuelve el elemento eliminado
}

// aplicar mi método shift a testArray
var testElement = myShift(testArray); // el elemento eliminado por myShift

// testeos con console.assert()
console.assert(ControlElement === testElement, "El elemento eliminado no es el mismo");
console.assert(controlArray.length === testArray.length, "La longitud de los arrays no es la misma después de eliminar el elemento");
console.assert(testArray[0] === "11", "El primer elemento del array de prueba no es '11'");
console.assert(testArray[1] === "12", "El segundo elemento del array de prueba no es '12'");
console.assert(testArray[2] === "13", "El tercer elemento del array de prueba no es '13'");
console.assert(ControlElement === "10", "El elemento eliminado del array control no es '10'");
console.assert(testElement === "10", "El elemento eliminado del array test no es '10'");

console.log("Array control después de shift nativo:", controlArray);
console.log("Array test después de myShift:", testArray);

