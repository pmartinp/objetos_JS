"use strict"
/* Crea un script que pida al visitante que ingrese dos números
y muestre su suma. P.D. Hay una trampa con los tipos de valores.
*/

let a = +prompt("Introduce un número");
let b = +prompt("Introduce otro número");

alert(a+b);

/* Si no especificásemos el tipo de dato que pedimos en el prompt, este devuelve un string.
Por lo que al sumarlos, estos no se sumarían realmente, sino que se concatenarían.
Para evitar estas situaciones debemos poner un "+" delante del prompt y nos devolverá valores
del tipo Number
*/