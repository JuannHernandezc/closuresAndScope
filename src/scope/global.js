/* Mediante la funcion podemos acceder a las variables
sin  ningun problema. */

// Con las palabras reservadas let y const no nos permite reasignar.


var hello = "Hello World";
let world = "Hello World +";
const helloWorld = "Hello World + +"


const anotherFunction = () =>{
    console.log(hello);
    console.log(world);
    console.log(helloWorld);
}
anotherFunction();


/* Al momento de no poner una palabra reservada y declarar esta 
se vuelve de forma global asi este denttro del bloque de una funcion 
aunque esto es una de las malas practicas que no se deben hacer*/
const helloWorld = () =>{
    globalVar = 'Im global';
}
helloWorld();
console.log(globalVar);


/* Al momento de declarar doble vez una variable esta
se convierte global, aparte es una de las malas practicas 
que no debemos utilizar */
const anotherFunction = () =>{
    var localVar = globalVar = 'Im Global';
}
anotherFunction();
console.log(localVar);