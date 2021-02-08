const baseUrl = "https://www.themealdb.com/api/json/v1/1/";

const loadMeal = search => {
    const url = `${baseUrl}search.php?s=${search}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayMeal(data.meals))
        .catch(error => console.log(error));;
}


// Click event handler

const searchButton = document.getElementById("search-button");
searchButton.addEventListener("click", () => {
    document.getElementById('showcase-meal').innerHTML = '';
    document.getElementById('warning').innerHTML = '';
    const searchMeal = document.getElementById("meal-input").value;
    loadMeal(searchMeal);
});

// Display Meal Catalog

const displayMeal = meals => {
    const mealsContainer = document.getElementById('showcase-meal');
    if (meals === null) {
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

// Display Single Meal

const mealDetail = id => {
    console.log(id);
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displaySingleMeal(data.meals[0]))
        .catch(error => console.log(error));
}

const displaySingleMeal = meal => {
    const mealInfo = document.getElementById('single-meal-info');
    document.getElementById("exampleModalLabel").innerText = meal.strMeal;
    const mealIngredients = `
        <div class="meal-modal">
            <img src="${meal.strMealThumb}" class="card-img-top">
            <h5 class="text-success py-2 mt-1 fw-bold">Ingredients</h5>
            <ul class="list-group list-group-flush">
                <li class="list-group-item"> ${meal.strMeasure1} ${meal.strIngredient1}</li>
                <li class="list-group-item"> ${meal.strMeasure2} ${meal.strIngredient2}</li>
                <li class="list-group-item"> ${meal.strMeasure3} ${meal.strIngredient3}</li>
                <li class="list-group-item"> ${meal.strMeasure4} ${meal.strIngredient4}</li>
                <li class="list-group-item"> ${meal.strMeasure5} ${meal.strIngredient5}</li>
                <li class="list-group-item"> ${meal.strMeasure6} ${meal.strIngredient6}</li>
                <li class="list-group-item"> ${meal.strMeasure7} ${meal.strIngredient7}</li>
                <li class="list-group-item"> ${meal.strMeasure8} ${meal.strIngredient8}</li>
                <li class="list-group-item"> ${meal.strMeasure9} ${meal.strIngredient9}</li>
                <li class="list-group-item"> ${meal.strMeasure10} ${meal.strIngredient10}</li>
            </ul>
        </div>        
    `;
    mealInfo.innerHTML = mealIngredients;
}
