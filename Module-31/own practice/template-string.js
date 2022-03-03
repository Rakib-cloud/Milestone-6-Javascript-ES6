const priya = 'Asif Akbar';
const meye = "Meye tumi ki dukkho chino";
const kobita = `kobita tumi sopno charini`;
//kuno string er pore \dile por por asbe 
const multiLine = 'This is my first line. \n' +
    'this is my second line.\n' +
    'third line text here\n' +
    'fourth line text here';
 //ager code e multi line er jonno \n use kora hocce ei kaj tai backtik diye kora jabe
// method 2 multiline 
 const multiLineNew = `this is is multi line
this is second line
this is third line
fourth line
`;

//ami caile alada akta method e kuno string er modde variable add korte parbo tar jonno 

const count = 5;
const old = '<h3 class="friend-name">Friend-5</h3>'//old string
const old2 = '<h3 class="friend-name">Friend-' + count + '</h3>';//old method for adding variable 
const old2 = `<h3 class="friend-name">Friend-${count}</h3>`;//new method

//pratice 4 : 
const friends = ['abul', 'babul', 'kabul', 'sabul'];
const new1 = `<h3 class="friend-name">Friend-${friends.length}</h3>`;

const first = 'Mamun';
const last = 'Chowdhury';
const fullOld = 'This person name is ' + first + ' ' + last;
const fullNew = `This person name is: ${first} ${last}. Has money ${(friends.length + 10) * 500}. He lives in Dhaka.`;

console.log(fullNew);

