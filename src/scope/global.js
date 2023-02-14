// Variables

var a; // Declaramos
var b = 'b'; // Declaramos y asignamos
b = 'B'; // Reasignamos
var a = 'aa'; // Redeclaración

// Global Scope

var fruit = 'apple'; // Global

function bestFruit() {
      console.log(fruit); // apple
}

bestFruit();


function countries() {
      country = 'Spain'; // Global
      console.log(country); // Spain
}

countries();
console.log(country); // Spain