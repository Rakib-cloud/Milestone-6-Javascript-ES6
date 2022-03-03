
const user={ id:111, name:'babau'};//object
const stringfy=JSON.stringify(user);//user ke json data onujai nicca
console.log(user);
console.log(stringfy);



//another example with json
const shop = {
    name:'RS Super shop',
    address:'badda',
    product:['laptop','mobile','tvv'],
    isexpensive: false
    }
     
    const shopstringfyed=JSON.stringify(shop);//why error if i declear shopstringfy=
    // console.log(shop);
    // console.log(shopstringfyed);

    //jodi ami stringify theke string take object e convert korte chai then amake parse use korte hob e

    const convert =JSON.parse(shopstringfyed);
    console.log(convert);

    