"use strict";
/* En los países europeos se cuentan los días de la semana a partir del lunes
(número 1), seguido del martes (número 2), hasta el domingo (número 7).
Escribe una función getLocalDay(date) que devuelva el día de la semana “europeo”
para la variable date.  should show 2
Una vez lo obtengas, tradúcelo a español.
*/

let date = new Date(2012, 0, 3); // 3 Jan 2012
alert(getLocalDay(date)); // tuesday,

function getLocalDay(date) {
  let dayNum = date.getDay() == 0 ? 7 : date.getDay();
  let days = [
    {day: "Lunes" },
    {day: "Martes" },
    {day: "Miércoles" },
    {day: "Jueves" },
    {day: "Viernes" },
    {day: "Sábado" },
    {day: "Domingo" },
  ];
  for (let index = 0; index < days.length; index++) {
    days[index].id = index+1;
  }
  return days.find((item) => item.id == dayNum).day;
}