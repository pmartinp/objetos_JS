"use strict"
/* Aquí la función makeUser devuelve un objeto. ¿Cuál es el resultado
de acceder a su atributo ref? ¿Por qué?

¿Cuál es el resultado?
*/

let user = makeUser();
alert(user.ref);
/* En este caso cuando accedemos al atributo ref, accedemos a un objeto vacío
y es por eso que el resultado devuelto es undefined.
*/
alert(user.ref.name);
/* Este caso viene derivado del anterior. Estamos intentando acceder a la propiedad 
name del objeto anterior, el cual está vacío. Es por ello que cuando queremos mostrar
por pantalla el resultado no devuelve nada.
*/

function makeUser() {
  return {
    name: "John",
    ref: this,
  };
}

