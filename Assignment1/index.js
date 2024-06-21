
//for selecting element from HTML using id
let btn1=document.getElementById('get-category-data');
let btn2=document.getElementById('get-ingredient-data');

//creating getCategoriesData() 
async function getCategoriesData() {
    try {
        const response = await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood');
        const data = await response.json();
        console.log(data);
        displayData(data);
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
btn1.addEventListener('click', getCategoriesData,displayData);
btn2.addEventListener('click', getIngredientData ,displayData);

// Function to create a card element
function createCard(info) {
    let card = document.createElement('div');
    card.className = 'card';
    
    let img = document.createElement('img');
    img.src = meal.strMealThumb;
    img.alt = meal.strMeal;

    let title = document.createElement('h3');
    title.textContent = meal.strMeal;

    card.append(title,img)

    return card;
}

// Function to display data in cards

function displayData(data) {
    data.forEach( (user)=> {
      let div = document.createElement("div");

      let avatar = document.createElement("img");

      avatar.src = user.avatar;

      let name = document.createElement("p");

      name.innerText = `${user.first_name} ${user.last_name}`;

      let email = document.createElement("p");

      email.innerText = user.email;

      div.append(avatar, name, email);

      container.appendChild(div);
    });
  }