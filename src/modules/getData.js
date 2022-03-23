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

// let urlStart = "https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/"
// const apiId = "t9up9m5T6uECqwieuC71"

// const urlLike = urlStart + apiId + "/likes"

// // async function addLikes(urlLike) {
//   await fetch(urlLike, {
//     method: 'POST',
//     body: JSON.stringify({
//       name: 'My cool new game',
//     }),
//     headers: {
//       'Content-type': 'application/json; charset=UTF-8',
//       'Accept': 'application/json'

//     },
//   })
//     .then((data) => {console.log(data)});
// // }

// start(urlStart)


// async function getLikes(urlLike) {
  
// }



