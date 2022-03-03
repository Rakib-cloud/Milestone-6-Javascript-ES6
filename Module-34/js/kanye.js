const loadquotes= () =>{
    fetch('https://api.kanye.rest/').then(res=>res.json()).then(data=>display(data));
}


//display te dekaite hobe
const display=quote =>{
 //console.log(quote);
 const kcode=document.getElementById('quote');//id diye niye aslam
 kcode.innerText=quote.quote; //set korlam
}