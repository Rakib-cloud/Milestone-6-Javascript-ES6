const fish = { id: 58, name: 'King Hilsha', price: 9000, phone: '01717555555555', address: 'Chandpur', dress: 'silver' };

// const phone = fish.phone;
// const price = fish.price;
// const dress = fish.dress;
// const id = fish.id;
//eivabe kuno object theke value read kora onk jamela tai ami nicar format use korbo 
const { phone, price, dress, id } = fish;//better format to using multi variable in one line

// console.log(phone, price);
// console.log(phone, id);
// console.log(phone, dress);
// console.log(phone, price);
// console.log(phone);

//another object decelearing 
const company = {
    name: 'GP',
    ceo: { id: 1, name: 'ajmol', food: 'fuchka' },
    web: {
        work: 'website development',
        employee: 22,
        framework: 'react',
        tech: {
            first: 'html',
            second: 'css',
            third: 'js'
        }
    },
};

// const work = company.web.work;
// const framework = company.web.framework;

//detecting object 
const { work, framework } = company.web;
const { food } = company.ceo;
const { second, third } = company.web.tech;
console.log(work, framework, food);