
const user = {
    id: 24,
    displayName: `Agus Kurniawan`,
    fullName: `Geetoor Dev`
};

function introduce({displayName, fullName}){
    console.log(`${displayName} with ${fullName}`);
}

introduce(user);

// fungsi dengan parameter default
function exponentsFormula(baseNumber, exponent = 2) {
    let result = baseNumber ** exponent;
    console.log(`${baseNumber}^${exponent} = ${result}`);
}

exponentsFormula(3);

// fungsi dengan menggunakan rest parameter

function sum(...numbers){
    let result = 0;
    for(let number of numbers){
        result += number;
    }

    return result;
}

console.log(sum(1,2,3,4,5))