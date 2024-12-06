/*En este caso lo que queremos es imprimir por esto 
    Esta es la linea #1
    Esta es la linea #2
    Esta es la linea #3
    .......
    Y asi sucesivamente 
*/

// Esta es una forma que es poco practica

// console.log('Esta es la linea #1');

// console.log('Esta es la linea #2');

// console.log('Esta es la linea #3');

// console.log('Esta es la linea #4');


// ------------------------------

// Ahora lo que voy a hacer es que por cada linea esto se vaya sumando en pocas palabras que el #__ sea dinamico

let numberOfLines = 1
console.log(`Esta es la linea #${numberOfLines}`);

numberOfLines++
console.log(`Esta es la linea #${numberOfLines}`);

numberOfLines++
console.log(`Esta es la linea #${numberOfLines}`);

numberOfLines++
console.log(`Esta es la linea #${numberOfLines}`);

