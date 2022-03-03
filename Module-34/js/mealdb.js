
const searchfood=() =>{
    const searchfood=document.getElementById('search-feild');
    const foodtext=searchfood.value;
    //console.log(foodtext);
    
    //clear section
    searchfood.value=' ';
    if(foodtext==' '){
      //code for please write something to display
    }

    //fetch kora load data
    const url=`https://www.themealdb.com/api/json/v1/1/search.php?s=${foodtext}
    `;
    fetch(url).then(res=>res.json()).then(data=>searchresult(data))

    

}

const searchresult =meals =>{
    const searchmeals=document.getElementById('search-result');
   // console.log(meals);
   searchmeals.innerHTML=' ';
   //searchmeals.textContent=' '; //method 2 for previous line

   //error showing 
   if(meals.length==0){
     //code likte hobe
   }
    meals.meals.forEach(meal => {
        console.log(meal);
        const div=document.createElement('div');
        div.classList.add('col');//new class added by the name col for each card creationh
        div.innerHTML=`
        <div onclick="mealdetails(${meal.idMeal})" class="col">
          <div class="card">
            <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${meal.strMeal}</h5>
              <p class="card-text">${meal.strInstructions.slice(0,250)}</p>
            </div>
          </div>
        </div>
        `;
        searchmeals.appendChild(div);
    })
}
//meal details works
const mealdetails=mealid=>{
       const url=`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealid}`;
       fetch(url).then(res=>res.json()).then(data=>displaymealdetail(data.meals[0]));

}

const displaymealdetail=meal=>{
     console.log(meal);

     const mealdetail=document.getElementById('meal-details');
     const div=document.createElement('div');
     div.classList.add('card');
     div.innerHTML=`
     
     <div class="rounded mx-auto d-block"><img src="${meal.strMealThumb}" class="card-img-top " alt="..."></div>
     <div class="card-body">
       <h5 class="card-title">${meal.strMeal}</h5>
       <p class="card-text">${meal.strInstructions.slice(0,250)}</p>
       <a href="${meal.strYoutube}" class="btn btn-primary">Go somewhere</a>
     </div>
     
     `;
     mealdetail.appendChild(div);
}