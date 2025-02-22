/*El método unshift agrega un nuevo valor al inicio de un array, 
desplazando todos los elementos existentes una posición hacia la derecha. 
Además, devuelve la nueva longitud del array.*/

var controlArray = [2, 3, 4];
var testArray = [2, 3, 4]
var controlElement;
var testElement;


//método unshift nativo

console.log("Antes de unshift nativo:", controlArray);
var nativeLength = controlArray.unshift(1); // añadir 1 al inicio
console.log("Después de unshift nativo:", controlArray);

console.assert(nativeLength === 4, "La nueva longitud debería ser 4");
console.assert(controlArray[0] === 1, "El primer elemento debería ser 1");
console.assert(controlArray[1] === 2, "El segundo elemento debería ser 2");


//crear mi método unshift
function myUnshift(array, value) {
  var length = array.length; // guardar la longitud original
  for (var i = length; i > 0; i--) {
      array[i] = array[i - 1]; // desplazar los elementos a la derecha
  }
  array[0] = value; // insertar el nuevo valor en la posición 0
  return array.length; // devolver la nueva longitud
}
console.log("Antes de myUnshift:", testArray);
var myUnshift = myUnshift(testArray, 1); // agregar 1 al inicio
console.log("Después de myUnshift:", testArray);

// tests con console.assert para mi función
console.assert(myUnshift === 4, "La nueva longitud debería ser 4");
console.assert(testArray[0] === 1, "El primer elemento debería ser 1");
console.assert(testArray[1] === 2, "El segundo elemento debería ser 2");