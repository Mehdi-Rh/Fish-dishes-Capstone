import {getData} from "../modules/getData.js"
// import {addComment, getComment} from "../modules/comments.js"

const urlItems = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood'

let data = await getData(urlItems) // Copy this line to get your data 
console.log(data[1]);

let e = data[0]
// Meal name: data.strMeal
// Meal photo link: data.strMealThumb

/* Generate urls of the involvment API */ 
// let urlStart = "https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/"
// const apiId = "t9up9m5T6uECqwieuC71"
// const urlLike = urlStart + apiId + "/likes"
// let urlComment = urlStart + apiId + "/comments"
/* ***********  */

// addComment(urlComment, e.item_id,username,comment)
// const comments = getComment(urlComment, e.item_id)

const popupBtn = document.getElementById('popupBtn');
const commentsPopup = document.createElement('div');
commentsPopup.setAttribute("id", "popup");
commentsPopup.setAttribute("class", "container");

const headComments = document.createElement('div');
headComments.classList.add('head-comments');

const closeButton = document.createElement('i');
closeButton.className = 'fa fa-times';
closeButton.id = 'closeBtn'

const dataComments = document.createElement('div');
dataComments.classList.add('data');

const addComments = document.createElement('div');
addComments.classList.add('add-comments');

const addTitle = document.createElement('h2');
addTitle.textContent = "Add comment";

const form = document.createElement('form');
form.setAttribute("class", "form");

const inputField = document.createElement('input');
inputField.setAttribute("type", "text");
inputField.classList.add('input');
inputField.setAttribute("placeholder" ,"Your name");

const textArea = document.createElement('textarea');
textArea.setAttribute("placeholder", "Your comment ...");
textArea.classList.add('text-area');

const formButton = document.createElement('button');
formButton.setAttribute("type", "submit");
formButton.classList.add('form-btn');
formButton.textContent = 'Comment';
form.append(inputField, textArea, formButton);

addComments.append(addTitle, form);

commentsPopup.append(closeButton, headComments, dataComments, addComments, );

document.body.append(commentsPopup);

popupBtn.addEventListener('click', () => {
    commentsPopup.style.display = 'flex';
})

const btn = document.getElementById('closeBtn')
btn.addEventListener('click', () => {
    commentsPopup.remove();
    location.reload();
})

headComments.innerHTML += `<div class='imgText'>
<img class='card-img' src=${e.strMealThumb}>
<p>${e.strMeal}</p>
</div>`;


formButton.addEventListener('click', (e) => {
  // addComment = async (itemID, userName, userComment) => {
  //     await fetch(`${this.baseurl}${this.dbInstance}/comments`, {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify({ item_id: itemID, username: userName, comment: userComment }),
  //     });
  //   }
  
  //   getComments = async (itemID) => {
  //     const data = await fetch(`${this.baseurl}${this.dbInstance}/comments?item_id=${itemID}`, { method: 'GET' });
  //     return data;
  //   }
})
