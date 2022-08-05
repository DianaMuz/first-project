'use strict';

//const category = 'toys';

//console.log(`https://someurl.com/${category}`);

let incr = 10,
    decr = 10;

incr++;
decr--;

console.log(incr);
console.log(decr);

console.log(4 * 2 == 8);

let num = 22;

while (num <= 29) {
    console.log(num);
    num++;
}

let numb = 21;

do {
    console.log(numb);
    numb++;
}
while (numb < 25);

function showFM(text) {
    console.log(text)
    let num = 20;
    return num
}

showFM('Hello world');
console.log()