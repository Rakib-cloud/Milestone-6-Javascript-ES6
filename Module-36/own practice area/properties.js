const bottle = {
    color: 'yellow',
    hold: 'water',
    price: 50,
    isCleaned: true
};//object bottle 
// getting all properties names color hold agula
const keys = Object.keys(bottle);
// console.log(keys);
// get all values 
const values = Object.values(bottle); //all values find
// console.log(values);
const pairs = Object.entries(bottle); //key and value jodi pete chai tobe array onujai result dibe
// console.log(pairs);
// Object.seal(bottle); //nica delete er age eita likle seal kore dise mane jotoi kisu hok na kno ami delete korte parbo na 
Object.freeze(bottle); //freeze kora takle ami seal er moto sob korte parbo na seal e new akta value updaate kora jeto but add kora ba delete kora jeto na but eikane kunotai hobe na
bottle.price = 100; //seal korte value change kora jabe 
bottle.height = 16; //seal kora tai add hobe na new kisu
delete bottle.isCleaned; //delete an object property
console.log(bottle);