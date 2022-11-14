"use strict"
/* ¿Por qué 6.35.toFixed(1) == 6.3? Según la documentación Math.round y toFixed 
redondean al número más cercano: 0..4 hacia abajo mientras 5..9 hacia arriba.
Por ejemplo:  alert( 1.35.toFixed(1) ); // 1.4
En el ejemplo similar que sigue, ¿por qué 6.35 es redondeado a 6.3, y no a 6.4?
¿Cómo redondear 6.35 de manera correcta?
*/

alert( 6.35.toFixed(1) ); // 6.3

/* Este fallo en el redondeo ocurre porque 6.5 en computación no es excatamente 6.5,
equivale a 6.349999999999. Es por ello, que como este número está más cerca del 6.3 que del
6.4, se redondee a la baja.
*/

alert( Math.round(6.35*10)/10); //6.4

/* para arreglarlo habría que primeramente multiplicar 6.35 por 10. Redondear 63.5 que en ese
caso no ocurriría el problema anterior, y posteriormente dividirlo entre 10 para que de el
resultado correcto
*/