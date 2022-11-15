"use strict";
/* ¿Cuantos segundos faltan para el día de después de mañana? Crea una función getSecondsToAfterTomorrow()
que devuelva la cantidad de segundos que faltan para el día después de mañana.
*/

alert(getSecondsToAfterTomorrow());

function getSecondsToAfterTomorrow(){
  let today = new Date(); // Fecha y hora actuales
  let timeIn2Days = new Date(today); // Se la asignamos a la que se convertirá en la fecha dentro de 2 días
  timeIn2Days.setDate(timeIn2Days.getDate() + 2); // Sumamos 2 días
  timeIn2Days.setHours(0, 0, 0, 0); // Como tambíen habíamos cogido la hora actual, la seteamos a 0

  return (timeIn2Days-today)/1000; // Dividimos entre 1000 porque da el resultado en milisegundos
}