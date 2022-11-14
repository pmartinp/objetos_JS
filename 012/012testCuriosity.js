"use strict"
/* Prueba ejecutando esto:
alert( 9999999999999999 );
¿Qué está pasando?¿Por qué?
*/

alert( 9999999999999999 );

/* El número arriba indicado se trata en javascript como un número de coma flotante.
Este no se puede representar precísamente en el formato de 64 bits IEEE-754 ya que 
dicho formato utiliza 52 bits para guardar números, 11 para el punto decimal,
y 1 para el signo.

Es por ello, que los numeros impares de 54 bits son redondeados al valor más próximo
Como curiosidad al escribir un número demasiado grande, que pueda desbordar el almacenamiento
de los 64 bits resultará en infinity
*/