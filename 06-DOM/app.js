//Examinando el DOM
//console.dir(document);
/*
console.log(document.URL);
console.log(document.title);
document.title = 'Prueba';
console.log(document.title);
console.log(document.head);
console.log(document.body);
//console.log(document.all);
console.log(document.all[5]);
*/

//getElementById()

//console.log(document.getElementById('header-title'));
/*var headerTitle = document.getElementById('header-title');
var header = document.getElementById('main-header');
//console.log(header);
headerTitle.textContent = 'Hola'; //<--- de esta forma puedo cambiar los valores de una etiqueta h1 
headerTitle.innerText = 'Adios';
headerTitle.innerHTML = '<h3>Prueba</h3>';
*/

//getElementsByClassName
/*
var items = document.getElementsByClassName('list-group-item');
console.log(items[0]);
items[0].textContent = 'Prueba';
*/

//getElementsByTagName

/*
var items = document.getElementsByTagName('li');
items[2].textContent = 'Prueba 02';
*/


//querySelector  // Selecciona la primera etiqueta que encuentra
/*
var header = document.querySelector('#main-header')
header.style.borderBottom = 'solid 4px #ccc'

var input = document.querySelector('input');
input.value = 'Hola Mundo';

var submit = document.querySelector('input[type="submit"]');
submit.value = 'Enviar';

var item = document.querySelector('.list-group-item');
item.style.color = 'red';
*/

//querySelectorAll

var items = document.querySelectorAll('.list-group-item')
items[2].style.color = 'red';

var titulos = document.querySelectorAll('.title');
console.log(titulos);

titulos[0].textContent = 'Prueba';

var impar = document.querySelectorAll('li:nth-child(odd)');  //Solo aplica a los impares
var par = document.querySelectorAll('li:nth-child(even)'); //Solo aplica a los pares
for(var i=0; i < impar.length; i++){
    impar[i].style.backgroundColor = '#CCC';
    par[i].style.backgroundColor = '#F4F4F4';
}

