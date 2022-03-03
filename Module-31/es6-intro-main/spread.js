const numbers = [23, 65, 99, 21, 34];
// console.log(numbers);
// console.log(...numbers); //only number gula dibe


const max = Math.max(23, 99, 65, 21, 34);
const maxInArray = Math.max(...numbers); //numbers akta array tai array modde value gular max jonno aivabe 
// console.log(max, maxInArray);

const numbers2 = [...numbers, 88]; //new array create but value is previous array value
numbers.push(55);
console.log(numbers);
console.log(numbers2);


const numbers=Math.max[10,20,30,40,50,60,70];
const maxInArray = Math.max(...numbers);
console.log(maxInArray);