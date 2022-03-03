const friends = ['Tom Hanks', 'Tom Cruise', 'Tom Brady', 'Tom Solaiman'];

//map korle always akta array pabo 
const fLengths = friends.map(friend => friend.length);//friends array er modde je element ase tar vitore values gular word length
// console.log(fLengths);


//array modde onk gula object ase
const products = [
    { name: 'water bottle', price: 50, color: 'yellow' },
    { name: 'mobile phone', price: 15000, color: 'black' },
    { name: 'smart watch', price: 3000, color: 'black' },
    { name: 'sticky note', price: 30, color: 'pink' },
    { name: 'water glass', price: 3, color: 'white' }
];
const productNames = products.map(product => product.name);
const productPrices = products.map(product => product.price);
// products.map(product => console.log(product));//without variable
products.forEach(product => console.log(product));
// console.log(productPrices);

//map er kaj : map jeta korbe akta array nibe then array modde kisu akta operation korbe and then sei array tak e onno akta array modde reke dibe