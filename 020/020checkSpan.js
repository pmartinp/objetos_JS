"use strict"
/* Escribe una función checkSpam(str) que devuelva true si str contiene
‘viagra’ o ‘XXX’, de lo contrario false. La función debe ser insensible
a mayúsculas y minúsculas:
*/

checkSpam('compra ViAgRA ahora') == true
checkSpam('xxxxx gratis') == true
checkSpam("coneja inocente") == false

function checkSpam(str){
  let minStr = str.toLowerCase();

  return minStr.includes('viagra') || minStr.includes('xxx');
}