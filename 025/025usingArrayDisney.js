"use strict";
// Ejecuta sobre el siguiente array las operaciones pedidas:
let disney = [
  { nombre: "Hércules", pelicula: "Hércules" },
  { nombre: "Megana", pelicula: "Hércules" },
  { nombre: "Hades", pelicula: "Hércules" },
  { nombre: "Campanilla", pelicula: "Peter Pan" },
  { nombre: "Wendy", pelicula: "Peter Pan" },
];

//Meter a Peter Pan al final del array disney.
disney.push({ nombre: "Peter Pan", pelicula: "Peter Pan" });

//Pintar el array
function paintArray(array) {
  let strDisney = "";
  for (const iterator of array) {
    strDisney +=
      "nombre: " +
      iterator.nombre +
      "       pelicula: " +
      iterator.pelicula +
      "\n";
  }
  alert(strDisney);
}
paintArray(disney);

//Meter a El capitán Garfio al principio del array, no olvides la película
disney.unshift({ nombre: "El capitán Garfio", pelicula: "Peter Pan" });

//Meter al cocodrilo detrás del capitán, no olvides la película
disney.splice(1, 0, { nombre: "Cocodrilo", pelicula: "Peter Pan" });

//Obtener los personajes de la película de "Peter Pan"; y mostrarlos uno a uno.
let peterPan = disney.filter((item) => item.pelicula == "Peter Pan");
paintArray(disney);

//Encontrar el índice de Campanilla.
let indCampanilla = disney.findIndex((item) => item.nombre == "Campanilla");
alert(indCampanilla);

//Buscar al cocodrilo.
let indCocodrilo = disney.find((item) => item.nombre == "Cocodrilo");
alert(indCocodrilo.nombre);

//Escribe la función shuffle(array) que baraje (reordene de forma aleatoria) los elementos del array.
function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
}

shuffle(disney);

paintArray(disney);