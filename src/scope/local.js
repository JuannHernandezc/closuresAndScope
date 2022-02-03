const helloWorld = () =>{
    /* Variable de manera local lo cual quiere
    decir que no permite accerder fuera del 
    scope local de la funcion */
    const hello = "Hello";
    console.log(hello);
}
helloWorld();


var scope = "Im Global";
const functionScope = () =>{
    /* Ambito lexico cuando busca la asignacion de la variable con la que un codigo
    va a trabajar en este caso es una funcion */
    var scope = "i am just local";
    const func = () =>{
        return scope;
    }
    console.log(func());
};
functionScope();


