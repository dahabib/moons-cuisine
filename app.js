const baseUrl = "https://www.themealdb.com/api/json/v1/1/";

const loadMeal = search => {
    const url = `${baseUrl}search.php?s=${search}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayMeal(data.meals))
        .catch(error => console.log(error));;
}

const searchButton = document.getElementById("search-button");
searchButton.addEventListener("click", () => {
    document.getElementById('showcase-meal').innerHTML = '';
    const searchMeal = document.getElementById("meal-input").value;
    loadMeal(searchMeal);
});

const displayMeal = meals => {
    const mealsContainer = document.getElementById('showcase-meal');
    if(meals === null) {
        const warn = document.createElement('h3');
        warn.innerText = "No meal found. Please provide a proper name.";
        document.getElementById('warning').appendChild(warn);
      } else {
        meals.forEach(meal => {        
            const mealDiv = document.createElement('div');
            mealDiv.className = "col";
            const mealDetails = `            
                <div class="card h-100" onclick="mealDetail('${meal.idMeal}')" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    <img src="${meal.strMealThumb}" class="card-img-top" id>
                    <div class="card-body text-center">
                        <h5 class="card-title fw-bold">${meal.strMeal}</h5>
                    </div>
                </div>            
            `;
            mealDiv.innerHTML = mealDetails;
            mealsContainer.appendChild(mealDiv);
        });       
      }
}
    
const mealDetail = id => {
    console.log(id);
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displaySingleMeal(data.meals[0]))
        .catch(error => console.log(error));
}

const displaySingleMeal = meal => {
    console.log(meal);
    const mealInfo = document.getElementById('single-meal-info');
    document.getElementById("exampleModalLabel").innerText = meal.strMeal;
        const mealIngredients = `
        <div class="meal-modal">
            <img src="${meal.strMealThumb}" class="card-img-top" id>
            <h5 class="card-title">Ingredients</h5>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">Cras justo odio</li>
                <li class="list-group-item">Dapibus ac facilisis in</li>
                <li class="list-group-item">Morbi leo risus</li>
                <li class="list-group-item">Porta ac consectetur ac</li>
                <li class="list-group-item">Vestibulum at eros</li>
            </ul>
        </div>        
        `;
    mealInfo.innerHTML = mealIngredients;
}
