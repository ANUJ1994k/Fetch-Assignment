
//for selecting element from HTML using id
let btn1=document.getElementById('get-category-data');
let btn2=document.getElementById('get-ingredient-data');

//creating getCategoriesData() 
async function getCategoriesData() {
    try {
        const response = await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood');
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('something went wrong:', error);
    }
}

// Function to fetch ingredient data
async function getIngredientData() {
    try {
        const response = await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast');
        const data = await response.json();
        console.log(data);

    } catch (error) {
        console.error('something went wrong:', error);
    }
}

// Event listeners for buttons
btn1.addEventListener('click', getCategoriesData);
btn2.addEventListener('click', getIngredientData);

