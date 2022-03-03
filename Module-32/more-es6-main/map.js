const numbers = [4, 6, 8, 10];
const output2 = [];

// function doubleOld(number) {
//     return number * 2;
// }

const doubleIt = number => number * 2;//old function er similar with arrow function

for (const number of numbers) {
    const result = doubleIt(number);//number gula patasse doubleit function e 
    output2.push(result);
}
// console.log(output2);

// 1. loop through each element
// 2. for each element call the provided function
// 3. result for each element will be stored in an array

// const output = numbers.map(doubleIt); //eita map deyar karone vitore vitore loop er kaj kore dibe 
// const output = numbers.map(number => number * 2);//full function tareo bosai dite pari caile
const output = numbers.map(x => x * 2); //same work with previous one 
// console.log(output);

const squares = numbers.map(x => x * x);
console.log(squares);