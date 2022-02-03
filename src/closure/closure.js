//Debido a que no hay un closure la variable se reasigna al momento de pasar un parametro a la funcion.
const moneyBox = (coins) =>{
    let saveCoins = 0;
    saveCoins += coins;
    console.log(`MoneyBox: $${saveCoins}`);
}

moneyBox(2);
moneyBox(10);


const moneyBox = () =>{
    let saveCoins = 0;
    const countCoins = (coins) =>{
        saveCoins += coins;
        console.log(`MoneyBox $${saveCoins}`);
    }
    return countCoins;
};

let myMoneyBox = moneyBox();
myMoneyBox(4);
myMoneyBox(6);
myMoneyBox(10);

