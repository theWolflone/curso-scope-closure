var firstName; // undefined
firstName = 'Santiago';
console.log(firstName);

var lastName = 'Lobo'; // declarar y asignar
lastName = 'Ulloa'; // reasignar
console.log(lastName);

var secondName = 'Alberto'; // declarar y asignar
var secondName = 'Alejandro'; // redeclarar
console.log(secondName); 


// Let

let fruit = 'apple'; // declarar y asignar
fruit = 'banana'; // reasignar
let fruit = 'kiwi'; // redeclarar


// Const
const animal = 'dog'; // declarar y asignar
animal = 'cat'; // reasignar
console.log(animal);

const vehicles = ['car', 'motorcycle']; // declarar y asignar
vehicles.push('truck'); // reasignar
console.log(vehicles);

vehicles.pop(); // reasignar

console.log(vehicles);