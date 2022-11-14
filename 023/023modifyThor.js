"use strict"
// Contesta los siguientes comentarios con respecto a la cadena que contiene la variable thor: 
let thor = "Thor es el hijo de Odín";
// Largo de la cadena
let strLarge = thor.length;
alert(strLarge);

//Encontrar la letra o
let minThor = thor.toLowerCase().split("");
let letterO = minThor.reduce((arr, value, index) => {
    (value==="o") ? arr.push(index):"";return arr;
},[]);
alert(letterO);

//Encontrar el carácter que ocupa la posición 3
let letter3 = thor.charAt(3);
alert(letter3);

//¿Qué carácter ocupa la posición 1?
let letter1 = thor.charAt(1);
alert(letter1);

//Trocea la cadena usando los espacios en blanco
let strArray = thor.split(" ");
alert(strArray);

//Reemplaza Thor por Loki
let loki = thor.replace("Thor", "Loki");
alert(loki);

//Recorta la cadena para que devuelva la palabra Odín
let odin = thor.slice(-4);
alert(odin);

//¿Puedes encontrar la letra a? Demuéstralo
let letterA = thor.indexOf("a");
alert(letterA);

//Pon la mitad de la cadena en minúsculas (Sin usar las posiciones de 0 a 11)
let strHalfLow = thor.slice(0,thor.length/2).toLowerCase() + thor.slice(thor.length/2).toUpperCase();
alert (strHalfLow);