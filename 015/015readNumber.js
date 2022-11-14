"use strict";
/* Crea una función readNumber que pida un número hasta que el visitante
ingrese un valor numérico válido. El valor resultante debe ser devuelto
como number. El visitante puede también detener el proceso ingresando una
línea vacía o presionando “CANCEL”. En tal caso la función debe devolver null.
*/

alert(readNumber());

function readNumber() {
  let num = prompt("Introduce un número, hazme el favor");
  if (!isFinite(num)) {
    return readNumber();
  }

  if (num === null || num === "") return null;

  return +num;
}
