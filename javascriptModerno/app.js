// ES5 - Variables
/*
var nombre5 = 'Carlos';
var edad = 25;
nombre5 = 'Andres';

// ES6 - Variables

const nombre6 = 'Samu';
let edad6 = 28;
*/

//Template Strings
/*
let nombre = 'Carlos';
let apellido = 'villegas';
const nacimiento = 1999;
const cuidad = 'medellin';

function calcularEdad(year) {
    return 2024 - year;
}


//ES5

console.log(nombre + ' ' + apellido + ' nació en ' + cuidad + ' su edad es ' + calcularEdad(nacimiento));

//ES6

console.log(`${nombre} ${apellido}, nació en ${cuidad}, y su edad es ${calcularEdad(nacimiento)}`);



let nombreCompleto = `${nombre} ${apellido}`;
console.log(nombreCompleto);
*/



/// Destructuracion - Destruccion - Destructuring


//ES5

//var datos = ['carlos', 24];

//var nombre = datos[0];
//var edad = edad[1];


//ES6
/*
var [nombre, edad] = ['Carlos', 25];

console.log(nombre);
console.log(edad);

const persona = {
    Nombre: 'Andres',
    Edad: 55
}

const { Nombre, Edad } = persona;
console.log(Nombre);
console.log(Edad);
*/

// Mapas

/*
const datos = new Map();

datos.set('nombre', 'Grover')
datos.set('edad', 30);
datos.set(1, 'villegas@gmail.com');

console.log(datos.get('nombre'));

*/



/// Spread Operator

var suma = function (a, b, c, d) {
    return a + b + c + d;
}


var op1 = suma(10, 20, 30, 40);
console.log(op1);

var valores = [10, 20, 30, 40];
const op2 = suma(...valores);

console.log(op2);


const rrhh = ['carlos', 'andres', 'adriana', 'samuel'];
const contabilidad = ['pedro', 'mateo', 'adrian'];

const empresa = [...rrhh, ...contabilidad];
console.log(empresa);


