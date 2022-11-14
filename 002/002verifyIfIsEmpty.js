"use strict"
/* Escribe la función isEmpty(obj) que devuelva el valor true 
si el objeto no tiene propiedades, en caso contrario false. Debería funcionar así:
let schedule = {};
alert( isEmpty(schedule) ); // true
schedule["8:30"] = "Hora de levantarse";
alert( isEmpty(schedule) ); // false
*/

let schedule = {};
alert(isEmpty(schedule));

schedule["8:30"] = "Hora de levantarse";
alert(isEmpty(schedule));


function isEmpty(obj){
    return Object.keys(obj) == 0 ? true : false;
}