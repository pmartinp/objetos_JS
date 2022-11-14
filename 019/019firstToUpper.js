"use strict"
/* Escribe una función ucFirst(str) que devuelva el string str
con el primer carácter en mayúscula, por ejemplo:
ucFirst("john") == "John";
*/

alert(ucFirst("John"));

function ucFirst(str){
  return str.charAt(0).toUpperCase() + str.slice(1);
}