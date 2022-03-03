function add(num1, num2 = 33) {
    // option 2
    // num2 = num2 || 0;
    // option 1
    // if (num2 == undefined) {
    //     num2 = 0;
    // }
    const total = num1 + num2;
    return total;
}
const result = add(15, 15);
console.log(result);
//perameter na dile function er num2 er value auto set hobe 33 diye
function fullName(first, last = 'Chowdhury') {
    const name = first + ' ' + last;
    return name;
}