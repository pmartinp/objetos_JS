"use strict"
/* Este bucle es infinito. Nunca termina, ¿por qué?
*/

let i = 0;
while (i != 10) {
  i += 0.2;
}

/* El bucle anterior es infinito porque la variable "i"
nunca llegará a ser igual a 10. Esto se debe a que al
sumar fracciones perdemos precisión. Por tanto el resultado
será 9.9999999, aproximadamente 10, pero NO 10.
*/