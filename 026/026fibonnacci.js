"use strict"
/* Crear un array que contenga los 20 primeros números de Fibonacci.*/

let fibNumbers = [];

for (let index = 0; index < 20; index++) {
    fibNumbers.push(fibonacci(index));
}

alert(fibNumbers);

function fibonacci(num){
    return num <= 1 ? num : fibonacci(num-1) + fibonacci(num-2);
}