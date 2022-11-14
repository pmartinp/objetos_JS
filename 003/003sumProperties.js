"use strict"
/* Tenemos un objeto que almacena los salarios de nuestro 
equipo:
let salaries = {
  Harry: 100,
  Ron 160,
  Hermione: 130
}
Escribe el código para sumar todos los salarios y almacenar el resultado en la variable 
sum. En el ejemplo de arriba nos debería dar 390. Si salaries está vacío entonces el 
resultado será 0.
*/

let salaries = {
    Harry: 100,
    Ron: 160,
    Hermione: 130
}

alert(sumSalaries(salaries));

function sumSalaries(salaries){
    let result = 0;
    for(let key in salaries){
        result+= salaries[key];
    }
    return result;
}