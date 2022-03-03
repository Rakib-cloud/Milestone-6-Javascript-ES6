// 1. using object literal
const student = { name: 'Sakib AL Hasan', job: 'cricketer' };
// 2. constructor
const person = new Object();
//console.log(person);//eita dile akta empty object dibe

// 3. 
// const human = Object.create(null); //eita diyeo empty object dibe
const human = Object.create(student);//object ta parent student 
// console.log(human.job);

// 4. class diye
class People {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
const peop = new People('Manus', 12); //object creation and value passing
// console.log(peop);

// 5. function
function Manus(name) {
    this.name = name;
}
const man = new Manus('kader');
console.log(man);
