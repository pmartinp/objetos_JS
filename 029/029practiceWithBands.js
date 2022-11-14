"use strict";
// Ejecuta sobre el siguiente array las operaciones pedidas:
let grupos = [
  { nombre: "ACDC", genero: "Rock" },
  { nombre: "Cold Play", genero: "Pop" },
  { nombre: "NCT Dream", genero: "K-Pop" },
  { nombre: "Metallica", genero: "Heavy Metal" },
];

//filtra los grupos por género obtenido aquellos que son de Heavy Metal.
let heavyMetal = grupos.filter(item => item.genero == "Heavy Metal");
alert(heavyMetal[0].nombre);

//Busca en los grupos usando “find” el grupo con Nombre “Cold Play”.
let coldPlay = grupos.find(item => item.nombre == "Cold Play");
alert(coldPlay.nombre);

//¿En qué posición del array se encuenta “Cold Play”?
let indexColdPlay = grupos.findIndex(item => item.nombre =="Cold Play");
alert(indexColdPlay);