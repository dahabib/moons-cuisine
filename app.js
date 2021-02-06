const baseUrl = "https://www.themealdb.com/api/json/v1/1/";

const loadMeal = search => {
    const url = `${baseUrl}search.php?f=${search}`;
    // const url = "https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata";
    console.log(url);
    fetch(url)
        .then(res => res.json())
        .then(data => displayMeal(data));
}

const searchButton = document.getElementById("search-button");
searchButton.addEventListener("click", () => {
    const searchMeal = document.getElementById("meal-input").value;
    loadMeal(searchMeal);
});

const displayMeal = meals => {
    console.log(meals);
    const mealsDiv = document.getElementById('showcase-meal');
    // meals.forEach(meal => {
    //     const mealDiv = document.createElement('div');
    //     mealDiv.className = 'single-meal';
    //     const mealImage = meal.strMealThumb;
    //     const mealDetails = `
    //         <img src="${mealImage}" alt="Meal Image" id="meal-image">
    //         <h3 class="meal-name">${meal.strMeal}</h3>
    //         <button onclick="displayCountryDetail('${meal.strMeal}')">Details</button>
    //     `;
    //     mealDiv.innerHTML = mealDetails;
    //     mealsDiv.appendChild(mealDiv);
    // });
    meals.forEach(function (meal) {
        const mealDiv = document.createElement('div');
        mealDiv.className = 'single-meal';
        const mealImage = meal.strMealThumb;
        const mealDetails = `
            <img src="${mealImage}" alt="Meal Image" id="meal-image">
            <h3 class="meal-name">${meal.strMeal}</h3>
            <button onclick="displayCountryDetail('${meal.strMeal}')">Details</button>
        `;
        mealDiv.innerHTML = mealDetails;
        mealsDiv.appendChild(mealDiv);
    });

    // const mealName = meals.meals[0].strMeal;
    // document.getElementById('meal-name').innerText = mealName;
    // const mealImage = meals.meals[0].strMealThumb;
    // document.getElementById('meal-image').setAttribute("src", mealImage);
}

