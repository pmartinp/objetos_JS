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
/* La sucesión de fibonacci consiste en sumar los 2 números anteriores de la propia sucesión, aunque existen 2 casos base
el 0 y el 1. Fibonacci de 0=0 y Fibonacci de 1=1.
*/