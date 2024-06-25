// Arreglos en JavaScript

/*
var nombre = ['Carlos', 'Adriana', 'Samuel', 'Cristian'];

var vegetales = new Array('Tomates', 'Zanahoria', 'Lechuga');

console.log(nombre[2]);
console.log(vegetales[1]);

nombre[2] = 'Jose';
console.log(nombre[2]);

vegetales[1] = 'Nabo';
console.log(vegetales[1]);

console.log(nombre.length);
console.log(vegetales.length);
*/


/***
 * Operaciones con arreglos
 */

var frutas = ['Pera', 'Manzanas','Uvas','Sandia'];
console.log(frutas);

/*for(i=0; i<=frutas.length - 1;i++){
    console.log(frutas[i]);
}*/

/*
frutas.forEach(function (elemento, indice, array){
    console.log(elemento, indice);
});
*/

frutas.push('Naranja');  //Agregar elemento
console.log(frutas);
frutas.unshift('fresa'); //Agregar elemento al inicio
console.log(frutas);
frutas.pop();  //Eleminar elemento al final
console.log(frutas);
frutas.shift();  //Eliminar elemento al inicio
console.log(frutas);

var pos = frutas.indexOf('Uvas');  //Que me muestre la posicion del elemento
console.log(pos);

frutas.splice(1,2); //eliminar elemento desde una posicion y la cantidad de elementos a eliminar 
console.log(frutas);
