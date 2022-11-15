"use strict";
/* Escribe una función getLastDayOfMonth(year, month) que devuelva el último
día del mes dado. A veces es 30, 31 o incluso 28/29 para febrero. Parámetros:
year – el año en formato de cuatro dígitos, por ejemplo 2012.
month – el mes, de 0 a 11.
Por ejemplo, getLastDayOfMonth(2012, 1) = 29 (febrero, año bisiesto).
*/

alert(getLastDayOfMonth(2012, 1));

function getLastDayOfMonth(year, month) {
  let getLastDayOfMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  return (year % 4 == 0 && month == 1 ) ? getLastDayOfMonth[month]+1 : getLastDayOfMonth[month]
}