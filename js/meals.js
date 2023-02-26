const loadMeals =(searchText)=>{
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`
    fetch(url)
    .then(res => res.json())
    .then(data => displayMeals(data.meals));
}

const displayMeals = meals =>{
    console.log(meals);
    //* step-1: container Element
    const mealsContainer = document.getElementById('meals-container');
    mealsContainer.innerHTML = '';
    meals.forEach(meal =>{
        console.log(meal)
        //*step-2: create child for each Element 
        const mealDiv = document.createElement('div')
        //* step-3: set content of the child
        mealDiv.classList.add('col');
        mealDiv.innerHTML= `
            <div class="card h-100">
                <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
                <div class="card-body">
                <h5 class="card-title">${meal.strMeal}</h5>
                <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                </div>
            </div>
        
        `

        //* step-4: appendChild

        mealsContainer.appendChild(mealDiv);

    })
}

const searchMeals = () =>{
    const searchText = document.getElementById('search-field').value;
    //* search meals
    console.log(searchText);
    loadMeals(searchText);
        
}

loadMeals('rice');