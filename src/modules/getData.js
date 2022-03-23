// getData function extract data from themealdb API
// NB: always call this function using the await keyword and in a // async function
async function gatData(url) {
  let data = await fetch(url)
  data = await data.json();
  return data.meals
}


export async function displayItems (mealContainer, url) {
  let divMeal = ''
  let data = await gatData(url)
  data.forEach((element) => {
    divMeal += `
    <div class="column">
      <img src="${element.strMealThumb}" alt="Avatar"">
      <div class="container">
        <h4><b>${element.strMeal}</b></h4>
        <div class="likeContainer">
          <span><i class="fas fa-heart"></i></span>
          <p>5 Likes</p>
        </div>
      </div>
      <button class="comments" type="button">Comments</button>
      <button class="reservations" type="button">Reservations</button>   
    </div>
  `
  });
  mealContainer.innerHTML = divMeal
}




