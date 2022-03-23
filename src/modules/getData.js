const displayScore = (mealContainer, mealList) => {
  let divMeal = ''
  Array.from(mealList).forEach((element) => {
    divMeal += `
    <div class="column card">
      <img src="${element.strMealThumb}" alt="Avatar" style="width:100%">
      <div class="container">
        <h4><b>${element.strMeal}</b></h4>
        <p>Architect & Engineer</p>
      </div>
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


