// fetch('https://jsonplaceholder.typicode.com/todos/1')
//   .then(response => response.json())
//   .then(json => console.log(json))

  function loaduser(){
      fetch('https://jsonplaceholder.typicode.com/users').then(response => response.json()).then (json=> display(json))
  }

function display(json){
    //console.log(json);
    const ul=document.getElementById('users');//id diye niye aslam
    for (const user of json){
       console.log(user.name);
        const li=document.createElement('li');//li create korbo 
        li.innerText=user.name;//li er modde user er name gula set korsi

        ul.appendChild(li);
        const newli=document.createElement('li');
        newli.innerText=`name:${user.name} email:${user.email}`;
        ul.appendChild(newli);
    }
}