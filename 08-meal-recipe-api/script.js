async function loadData(foodName) {
    // const response = await axios.get("https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata");
    const response = await axios.get("https://www.themealdb.com/api/json/v1/1/search.php", {
        "params":{
            "s":  foodName
        }
    })
    return response.data;
}

document.addEventListener("DOMContentLoaded", async function(){
//   const data = await loadData("chicken");  
//   console.log(data);

    let searchBtn = document.querySelector("#searchBtn");
    searchBtn.addEventListener("click", async function(){
        const foodName = document.querySelector("#foodName").value;
        const data = await loadData(foodName);
        console.log(data);
        const resultDiv = document.querySelector("#results");
        for (let meal of data.meals) {
            let cardDiv = document.createElement('div');
            cardDiv.className = "card m-1";
            cardDiv.style.flexBasis = "18rem";
            cardDiv.style.flexShrink = 0;
            cardDiv.style.flexGrow = 1;
            cardDiv.style.gap = "1em";
            cardDiv.innerHTML = `
            <img src="${meal.strMealThumb}" 
                class="card-img-top" alt="${meal.strMeal}"/>
            <div class="card-body">
                <h5 class="card-title">${meal.strMeal}</h5>
                <h5>Category: ${meal.strCategory}</h5>
                <h5>Ingredients</h5>
                <ul>
                    ${renderIngredients(extractIngredients(meal))}
                </ul>
                <a href="${meal.strSource}" class="btn btn-primary">Read Details</a>
            </div>
            `
            resultDiv.appendChild(cardDiv);
        }
    })
})

function extractIngredients(meal) {
    let ingredients = [];
    for (let i  =1; i < 21; i++) {
        let currentIngredient = meal["strIngredient"+i];
        if (currentIngredient == "") {
            break;
        }
        ingredients.push(currentIngredient);
    }
    return ingredients;
}

function renderIngredients(ingredients) {
    let stringBuffer = "";
    for (let i of ingredients) {
        stringBuffer += `<li>${i}</li>`
    }
    return stringBuffer;
}
