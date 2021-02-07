const baseUrl = "https://www.themealdb.com/api/json/v1/1/";

const loadMeal = search => {
    const url = `${baseUrl}search.php?f=${search}`;
    // const url = "https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata";
    console.log(url);
    fetch(url)
        .then(res => res.json())
        .then(data => displayMeal(data.meals));
}

const searchButton = document.getElementById("search-button");
searchButton.addEventListener("click", () => {
    const searchMeal = document.getElementById("meal-input").value;
    loadMeal(searchMeal);
});

const displayMeal = meals => {
    const mealsContainer = document.getElementById('showcase-meal');
    meals.forEach(meal => {
        console.log(meal);
        const mealDiv = document.createElement('div');
        mealDiv.className = 'single-meal';
        const mealImage = meal.strMealThumb;
        const mealDetails = `
            <img src="${mealImage}" alt="Meal Image" id="meal-image">
            <h3 class="meal-name">${meal.strMeal}</h3>
            <button onclick="mealDetail('${meal.strMeal}')">Details</button>
        `;
        mealDiv.innerHTML = mealDetails;
        mealsContainer.appendChild(mealDiv);
    });
}
    
// const mealDetail = 
