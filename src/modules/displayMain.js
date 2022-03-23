import {getData} from "./getData.js"

export async function displayItems (mealContainer, url) {
  let divMeal = ''

  let data = await getData(url) // Copy this line to get your data 
  
  
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