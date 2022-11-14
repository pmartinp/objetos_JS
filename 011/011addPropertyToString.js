"use strict"
/* ¿Puedo agregar una propiedad a un string?: Considera el siguiente código:
Qué piensas: ¿funcionará? ¿Qué mostrará? ¿Por qué?
*/

let str = "Peter";
str.test = 5;
alert(str.test);

/* Debemos diferenciar entre el string de tipo primitivo y el String de tipo objeto.
En el primero sería imposible agregarle una propiedad. NO es el caso del segundo que
al ser tratado como un objeto no habría problemas.
*/

/* En este ejemplo dado el código no funcionará y no mostrará nada por lo anteriormente mencionado.
Para poder ejecutar este ejemplo correctamente deberíamos crear un String de tipo objeto tal que así:
let strObject = new String("Peter");
strObject.test = 5;
alert(strObject.test);
*/
