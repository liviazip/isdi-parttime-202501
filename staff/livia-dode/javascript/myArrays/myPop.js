// pop()

// removes the last element from an array and returns that element. This method changes the length of the array.

// Variables necesarias:
// array control --> aplicaremos el metodo pop nativo de js
// array de test --> aplicaremos el metodo que hemos hecho nosotros
// element control --> almacena lo que devuelve el pop nativo de js
// element de test ---> almacena lo que devuelve nuestro pop


var controlArray = ['pera', 'aguacate', 'manzana', 'mango'];
var testArray = ['pera', 'aguacate', 'manzana', 'mango'];
var controlElement;
var testElement;

controlElement = controlArray.pop(); //Ejecutar función nativa js


//Crear mi función
function myPopped(arr) {
  if (arr.length === 0) return undefined

  var value = arr[arr.length - 1]
  --arr.length
  return value
}


//Ejecutar mi funcion
testElement = myPopped(testArray)


//Ejecutar los tests
console.info('running tests')

var lengthToTest = controlArray.length > testArray.length ? controlArray.length : testArray.length;

for (var i = 0; i < lengthToTest; i++) {
  console.assert(testArray[i] === controlArray[i], `index ${i} is diferent in both arrays. ${testArray[i]} !== ${controlArray[i]}`);
}

console.assert(controlElement === testElement, `does not return the correct value. ${controlElement} !== ${testElement}`)

//creo variables para un caso poco frecuente (límite)
console.assert([].pop() === myPopped([]), `should return undefined but returns: ${myPopped([])}`)