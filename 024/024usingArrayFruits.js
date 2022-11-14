"use strict"
//Ejecuta sobre el siguiente array las operaciones pedidas:
let fruits = ["Banana", "Manzana", "Fresa"];

//Añadimos cereza al principio
fruits.unshift("cereza");

//Añadimos melocotón al final
fruits.push("melocotón");

//Mostrar el array elemento a elemento con for clásico
for (let index = 0; index < fruits.length; index++) {
    alert(fruits[index]);
}

//Eliminamos el primer elemento.
fruits.shift();

//Eliminamos el último elemento.
fruits.pop();

//Mostrar cada elemento con for of o for in, lo que considere más adecuado.
/*Para arrays es recomendable utilizar for of, ya que es entre 10 y 100 veces más rápido que el for in.
En cambio, el for in está optimizado para recorrer objetos*/
for (const iterator of fruits) {
    alert(iterator);
}