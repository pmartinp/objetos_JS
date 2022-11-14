"use strict"
/* Crea una función randomInteger(min, max) que genere un número
entero aleatorio entre min y max incluyendo ambos, min y max, como
valores posibles. Todo número del intervalo min..max debe aparecer con
la misma probabilidad. Ejemplos de funcionamiento:
alert( randomInteger(1, 5) ); // 1
alert( randomInteger(1, 5) ); // 3
alert( randomInteger(1, 5) ); // 5
*/

function random(min, max){
  return Math.round(Math.random()*(max-min)+min);
}

alert( random(1, 5) ); // 1.2345623452
alert( random(1, 5) ); // 3.7894332423
alert( random(1, 5) ); // 4.3435234525