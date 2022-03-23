const displayScore = (mealContainer, mealList) => {
  let divMeal = ''
  Array.from(mealList).forEach((element) => {
    divMeal += `
    <div class="column">
      <img src="${element.strMealThumb}" alt="Avatar"">
      <div class="container">
        <h4><b>${element.strMeal}</b></h4>
        <div>
          <span><i class="fas fa-heart"></i></span>
          <p>5 Likes</p>
        </div>
      </div>
      <button id="comments" type="button">Comments</button>
      <button id="reservations" type="button">Reservations</button>   
    </div>
  `
  });
  mealContainer.innerHTML = divMeal
}

export async function gatData(url, mealContainer) {
    let data = await fetch(url)
    data = await data.json();
    displayScore(mealContainer, data.meals)
  }


