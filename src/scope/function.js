//FUNCTION SCOPE

const fruits = () =>{
    // Las siguiente variable unicamente se ejecutara en
    // en el ambito local de la funcion
    var fruit = 'apple';
    console.log(fruit);
}
fruits();


const anotherFunction = () =>{
    var x = 1;
    var x = 2;
    let y = 1;
   // let y = 2;
    console.log(x);
    //Este codigo dario error debido a que let o const no se puede reasignar
    //Se recomienda siempre utilizar let y const porque es mala practica el var
    console.log(y);
}
anotherFunction();
