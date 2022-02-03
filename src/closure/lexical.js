const buildCount = (i) =>{
    let count = i;
    const displayCount = () =>{
        console.log(count++);
    };
    return displayCount;
}
//Podemos tener un asignacion y un alcance diferente para el closure las veces que se requieran
const myCount = buildCount(1);
myCount();
myCount();
myCount();

const myOtherCount = buildCount(10);
myOtherCount();
myOtherCount();
myOtherCount();
