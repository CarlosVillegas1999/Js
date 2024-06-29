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

/*
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
*/

//ParentNode
/*
var itemList = document.querySelector('#items');
console.log(itemList.parentNode);
var main = itemList.parentNode;
main.style.backgroundColor = '#f4f4f4';
*/
//ParentElement


/*
var itemList = document.querySelector('#items');
console.log(itemList.parentElement);
var main = itemList.parentElement;
main.style.backgroundColor = '#f4f4f4';
*/

//var itemList = document.querySelector('#items');
//chilNodes
//console.log(itemList.childNodes);


//children
//console.log(itemList.children);


//firstChild //firstElementChild 
/*
console.log(itemList.firstChild);
console.log(itemList.firstElementChild);
itemList.firstElementChild.textContent = 'Prueba'
*/

//lastChild //lastElementChild
/*
console.log(itemList.lastChild);
console.log(itemList.lastElementChild);
itemList.lastElementChild.textContent = 'Prueba';
*/

/*
//previusSibling
console.log(itemList.previousSibling);

//previusElementSibling
console.log(itemList.previousElementSibling);

//nextSibling
console.log(itemList.nextSibling);

//nextElementsSibling
console.log(itemList.nextElementSibling);
*/

//createElement
//tagName


var nuevoDiv = document.createElement('div');

nuevoDiv.className = 'Hola';
nuevoDiv.id = 'div-hola';
nuevoDiv.setAttribute('title','Hola Mundo');

//createTextNode

var nuevoNodoText = document.createTextNode('Hola Mundo');
nuevoDiv.appendChild(nuevoNodoText);

console.log(nuevoDiv);

var contenedor = document.querySelector('.container');
console.log(contenedor);

var h1 = document.querySelector('h1');
console.log(h1);

contenedor.insertBefore(nuevoDiv ,h1);

