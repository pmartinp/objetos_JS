"use strict";
/* Cambia el formato a fecha relativa. Escribe una función formatDate(date)
que muestre la fecha en el siguiente formato:
Si a partir de la fecha date pasó menos de 1 segundo, debe devolver "ahora mismo".
De no ser así, si a partir de la fecha date pasó menos de 1 minuto, debe retornar "hace n seg,".
De no ser así, si pasó menos de una hora, debe devolver "hace n min.".
De no ser así, debe retornar la fecha completa en el formato "DD.MM.AA HH:mm".
Es decir: "día.mes.año horas:minutos", cada uno de ellos en formato de 2 dígitos, por ej. 31.12.16 10:00.
*/

alert(formatDate(new Date()));
alert(formatDate((new Date())-1000*30));
alert(formatDate(new Date('December 17, 1995 03:24:00')));

function formatDate(date) {
  let seconds = (new Date() - date) / 1000; // la diferencia entre ambas, representada en segundos

  if (seconds < 1) {
    // menos de 1 segundo
    return "ahora mismo";
  } else if (seconds < 60) {
    // menos de 1 minuto
    return "hace " + seconds + " seg.";
  } else if (seconds < 3600) {
    // menos de 1 hora
    return "hace " + seconds * 60 + " min.";
  } else {
    let format = [
      "0" + date.getDate(),
      "0" + (date.getMonth() + 1),
      "" + date.getFullYear(),
      "0" + date.getHours(),
      "0" + date.getMinutes(),
    ].map((component) => component.slice(-2)); // toma los últimos 2 dígitos de cada componente

    return format.slice(0, 3).join(".") + " " + format.slice(3).join(":");
  }
}