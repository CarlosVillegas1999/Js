/*

function bienvenido(){
    console.log("Hola");
}

bienvenido();


function bienvenido(){
    return "Hola";
}
var mensaje = bienvenido();
console.log(mensaje);

*/

//PARTES DE UNA FUNCIÓN
//ENTRADAS(PARÁMETROS), CÓDIGO(VA DENTRO DEL BLOQUE), SALIDA(RETURN)

/*
function cuadradoNumero(num){
    console.log(num);
}

var num = 3;
cuadradoNumero(num);

*/

/*
function cuadradoNumero(num){
    var resultado = num * num;
    return resultado;
}

var numero = 3;
var valor = cuadradoNumero(numero)
console.log(valor);
console.log(cuadradoNumero(5));
*/

//EJERCICIO

//C = (F - 32) * 5/9

/*
function convert(gradFh){
    var celius = (gradFh - 32) * 5/9;
    return celius;
}

var tempUno = convert(32);
var tempDos = convert(68);

console.log(tempUno);
console.log(tempDos);

*/

/*

function calcularEdad(yearNacimiento){
    return 2024 - yearNacimiento;
}

var edad1 = calcularEdad(1999);
var edad2 = calcularEdad(1939);
var edad3 = calcularEdad(1959);
console.log(edad1);
console.log(edad2);
console.log(edad3);

*/

//EJERCICIO

/*
function calcularEdad(yearNacimiento){
    return 2024 - yearNacimiento;
}

function yearJubilacion(yearNacimiento, Nombre){
    var years =  calcularEdad(yearNacimiento);
    var anos = 65 -years;
    console.log(Nombre + " Le faltan " + anos + " años para su jubilación")
}

var anos = yearJubilacion(1999, "Carlos");

*/
