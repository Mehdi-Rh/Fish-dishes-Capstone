import getData from './getData.js';
import { getLikes } from './likes.js';
import itemCount from './itemCounter.js'; //Try to fix this implementation please guys

export default async function displayItems(mealContainer, url, urlLike) {
  let divMeal = '';
  const likeList = await getLikes(urlLike);
  const data = await getData(url); // Copy this line to get your data
  // console.log(data)
  // const count = itemCount(data);
  // document.querySelector('.nav-item').children[0].innerHTML += `(${count})`;

  data.forEach((element) => {
    let likeNumber = likeList.find((x) => x.item_id === element.idMeal);
    // The line below it to prevent from item not integrated on the api
    likeNumber = (likeNumber ? likeNumber.likes : 0);

    divMeal += `
    <div class="column" id="${element.idMeal}">
      <img src="${element.strMealThumb}" class="meal-image" alt="Avatar"">
      <div class="containerCard">
        <h4 class="meal-title">${element.strMeal}</h4>
        <div class="likeContainer">
          <span id="${element.idMeal}"><i class="fas fa-heart"></i></span>
          <p class="like">${likeNumber || 0} Likes</p>
        </div>
      </div>
      <button class="comments" type="button">More</button>
    </div>
  `;
  });
  mealContainer.innerHTML = divMeal;
}
