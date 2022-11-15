"use strict";
/* Hay un objeto ladder que permite subir y bajar.

Ahora, si necesitamos hacer varios llamados en secuencia podemos hacer algo como esto:

Modifica el código de “arriba” up, “abajo” down y “mostrar peldaño”
showStep para hacer los llamados encadenables como esto:

ladder.up().up().down().showStep().down().showStep(); // shows 1 then 0
Tal enfoque es ampliamente usado entre las librerías JavaScript.
*/

let ladder = {
  step: 0,
  up() {
    // suma un peldaño
    this.step++;
    return this;
  },
  down() {
    // resta un peldaño
    this.step--;
    return this;
  },
  showStep: function () {
    // muestra el peldaño actual
    alert(this.step);
    return this;
  },
};

ladder.up();
ladder.up();
ladder.down();
ladder.showStep(); // 1
ladder.down();
ladder.showStep(); // 0

ladder.up().up().down().showStep().down().showStep(); // shows 1 then 0