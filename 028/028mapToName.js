"use strict";
/* Tienes un array de objetos bands, cada uno tiene band.name.
Escribe el código que lo convierta en un array de nombres. Por ejemplo:
*/

let acdc= { name: "ACDC", age: 25 };
let metallica = { name: "Metallica", age: 30 };
let guns= { name: "Guns and Roses", age: 28 };
let bands = [ acdc, metallica, guns];
let names = bands.map(item => item.name);
alert( names ); 

