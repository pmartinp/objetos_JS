"use strict";
/* Crea un objeto a partir de un array Supongamos que recibimos un array
de personajes con la forma {id:..., nombre:..., pelicula:... }.
Crea una función groupById(arr) que cree un objeto, con id como clave (key) y
los elementos del array como valores. Dicha función es realmente útil cuando 
trabajamos con información del servidor.
Para esta actividad asumimos que cada id es único. No existen dos elementos del array con el mismo id.
Usa el método de array .reduce en la solución.
*/

let characters = [
  { id: "1", nombre: "Anakin Skywalker", pelicula: "Star Wars" },
  { id: "2", nombre: "Riddick", pelicula: "Las crónicas de Riddick" },
  { id: "3", nombre: "Máximo Décimo Meridio", pelicula: "Gladiator" },
  { id: "4", nombre: "Aragorn", pelicula: "El Señor de los Anillos" },
];

let charactersId = groupById(characters);
let charactersStr = "";

// Pasamos el array a una variable string en un formato que facilite su visualización
for (const key in charactersId) {
  charactersStr += "personajes: " + charactersId[key].nombre +"\n";
}
alert(charactersStr);

function groupById(arr) {
  return arr.reduce((obj, value) => {
    obj[value.id] = value;
    return obj;
  }, {})
}
