"use strict";
/* ¿Es posible crear las funciones A y B para que se cumpla new A() == new B()?
function A() { ... }
function B() { ... }

Si es posible, entonces proporcione un ejemplo de código.
*/

function A() {
  return this;
}
function B() {
  return this;
}

let a = structuredClone(A());
let b = structuredClone(B());

alert(a == b); // true
