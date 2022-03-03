
function loaduser(){
    fetch('https://jsonplaceholder.typicode.com/posts').then(response => response.json()).then (json=> display(json))
}
loaduser();
function display(json){
    const postcon=document.getElementById('posts');
    //console.log(json);
    for(const post of json){
        //create a div 
        const div=document.createElement('div');
        //div er modde html h2 creation
        div.innerHTML=`
        <h3>${post.title}</h3>
        <p>${post.body}</p>

        `;
        postcon.appendChild(div);
    }
}