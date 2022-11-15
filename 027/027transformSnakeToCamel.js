"use strict";
/* Escribe la función camelize(str) que convierta palabras separadas por _como “mi_cadena_corta”
en palabras con mayúscula “miCadenaCorta”. Esto sería: quitar todos los _ y que cada palabra
después de _ comience con mayúscula. Ejemplos:
camelize("background_color") == 'backgroundColor';
camelize("list_style_image") == 'listStyleImage';
camelize("_webkit_transition") == 'WebkitTransition';
P.D. Pista: usa split para dividir el string en un array, transfórmalo y vuelve a unirlo (join).
*/

alert(camelize("background_color"));
alert(camelize("list_style_image"));
alert(camelize("_webkit_transition"));

function camelize(str) { 
  /* map llama a la función callback provista una vez por elemento de un array,
   en orden, y construye un nuevo array con los resultados.*/
  return str
    .split("_")
    .map((value, i) =>
      i == 0 ? value : value[0].toUpperCase() + value.slice(1)
    )
    .join("");
}
