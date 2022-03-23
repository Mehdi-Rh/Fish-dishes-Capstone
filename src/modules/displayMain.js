import {getData} from "./getData.js"
import {getLikes} from "./likes.js"


export async function displayItems (mealContainer, url, urlLike) {
  let divMeal = ''
  let likes = await getLikes(urlLike)
  console.log(likes)

  let data = await getData(url) // Copy this line to get your data 
  console.log(data[0])

  
  data.forEach((element) => {
    const likeNumber = likes.find(x => x.item_id === element.idMeal)
    divMeal += `
    <div class="column">
      <img src="${element.strMealThumb}" alt="Avatar"">
      <div class="container">
        <h4><b>${element.strMeal}</b></h4>
        <div class="likeContainer">
          <span><i class="fas fa-heart"></i></span>
          <p>${likeNumber||0} Likes</p>
        </div>
      </div>
      <button class="comments" type="button">Comments</button>
      <button class="reservations" type="button">Reservations</button>   
    </div>
  `
  });
  mealContainer.innerHTML = divMeal
}