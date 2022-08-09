const obj = {
    a: 10,
    b: 1
};

function copy(mainObj) {
    let objCopy = {};

    let key;
    for (key in mainObj) {
        objCopy[key] = mainObj[key];
    }
    return objCopy;
}

const numbers = {
    a: 10,
    b: 4,
    c: {
        x: 3,
        y: 9
    }
};

const newNumbers = copy(numbers); 

newNumbers.a = 2;
console.log(newNumbers);
console.log(numbers);

const add = {
    d: 7,
    e: 20
};

console.log(Object.assign({}, add));