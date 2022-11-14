"use strict";
/* Crea un objeto calculator con tres métodos:
read() pide dos valores y los almacena como propiedades de objeto con nombres a y b.
sum() devuelve la suma de los valores almacenados.
mul() multiplica los valores almacenados y devuelve el resultado.
let calculator = {
  // ... tu código ...
};
*/

let calculator = {
  read() {
    this.a = +prompt("Primer número");
    this.b = +prompt("Segundo número");
  },
  sum() {
    return this.a + this.b;
  },
  mul(){
    return this.a * this.b;
  }
};

calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );