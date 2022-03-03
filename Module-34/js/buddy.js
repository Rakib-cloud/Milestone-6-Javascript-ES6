
const buddies = () =>{
    fetch('https://randomuser.me/api/?results=5').then(res=>res.json()).then(data => display(data) )
}
buddies();
const display =data =>{
const buddies=data.results;
const buddiesdiv=document.getElementById('buddyes');
for(const buddy of buddies){
   const p=document.createElement('p');
   p.innerText= ` ${buddy.name.first}`;
   buddiesdiv.appendChild(p);
}
}