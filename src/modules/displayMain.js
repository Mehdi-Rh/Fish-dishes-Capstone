import {getData} from "./getData.js"
import {getLikes} from "./likes.js"



export async function displayItems (mealContainer, url, urlLike) {
  let divMeal = ''
  const likeList = await getLikes(urlLike)
  const data = await getData(url) // Copy this line to get your data ({x})
  
  data.forEach((element) => {
    let likeNumber = likeList.find( ({item_id}) => item_id === element.idMeal) 
    // The line below it to prevent from item not integrated on the api
    likeNumber = (!!likeNumber ?  likeNumber.likes : 0)

    divMeal += `
    <div class="column">
      <img src="${element.strMealThumb}" alt="Avatar"">
      <div class="container">
        <h4><b>${element.strMeal}</b></h4>
        <div class="likeContainer">
          <span id="${element.idMeal}"><i class="fas fa-heart"></i></span>
          <p class="like">${likeNumber||0} Likes</p>
        </div>
      </div>
      <button class="comments" type="button">Comments</button>
      <button class="reservations" type="button">Reservations</button>   
    </div>
  `

  });
  mealContainer.innerHTML = divMeal
}