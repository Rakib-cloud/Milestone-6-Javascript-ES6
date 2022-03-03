//fetch country details
const loadcountry=() =>{
    fetch('https://restcountries.com/v2/all').then(res=>res.json()).then(data=>display(data))
}
loadcountry();

const display= data=> {
    //method 1 for loading each country
// for (const country of data){
//     console.log(country);
// }

const countrydiv=document.getElementById('country');
data.forEach(country=>{
    //console.log(country);
    const div=document.createElement('div');
    div.classList.add('country');//new
    //method 2

     div.innerHTML=`
          <h3>${country.name}</h3>
          <p>${country.capital}</p>
          <button onclick="loadcountryname('${country.name}')" >Details</button>
     `;
    // method1
    // const h3=document.createElement('h3');
    // h3.innerText=country.name;
    // div.appendChild(h3);
    // const p=document.createElement('p');
    // p.innerText=country.capital;
    // div.appendChild(p);
     countrydiv.appendChild(div);
});

}
//display country details works 
const loadcountryname = name => {
    const url=`https://restcountries.com/v3.1/name/${name}`
    fetch(url).then(res=> res.json()).then(data=>displaycountrydetails(data[0]))
}

const displaycountrydetails= country =>{
 console.log(country.name);
 const countrydiv=document.getElementById('country-details');
 countrydiv.innerHTML=`
         <h3>Country Name:${country.name}</h3>
         <h3>Country Population:${country.population}</h3>
         <img width="200px" src="${country.flag}" >
 `
}