const fruits = () =>{
    if(true){
        var fruit1 = 'apple';
        /* Esta declaracion de variables unicamente es accesible dentro del block del if si las llamamos por fuera nos dara un
        reference error */
        let fruit2 = 'banana';
        const fruit3 = 'Durazno';
        console.log(fruit2);
        console.log(fruit3);
    }
    console.log(fruit1);
    // Estos dos elementos se deben imprimir dentro del bloque del if por eso se suben dentro del block del if 
    // console.log(fruit2);
    // console.log(fruit3);
}
fruits();


// Si las variable declaradas en el siguiente codigo son con let estos imprimiran el valor asignado a cada scope 
// Mientras que si las variables declaradas son con var el valor se reasignara e imprimira el ultimo tomado por el codigo.

// let x = 1;
var x = 1;
{
    // let x = 2;
    var x = 2;
    console.log(x);
}
console.log(x);

// Debido a que variable esta declarada con la palabra reservada var este es reasignado en el loop haciendo que tome el ultimo 
// valor asignado en el block e imprimirlo 10 veces
// Pero al momento de hacerlo con la palabra reservada let este no se re asigna y hace el procedimiento del loop como se requiere 
const anotherFunction = () =>{
    for(/*var*/ let i = 0; i < 10; i++){
        setTimeout(()=>{
            console.log(i);
        },1000)
    }
}
anotherFunction();