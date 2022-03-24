import {getData} from "../modules/getData.js"

const urlItems = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood'

let data = await getData(urlItems) // Copy this line to get your data 
console.log(data[0]);

let e = data[0]
// Meal name: data.strMeal
// Meal photo link: data.strMealThumb


const popupBtn = document.getElementById('popupBtn');
const commentsPopup = document.createElement('div');
commentsPopup.setAttribute("id", "popup");
commentsPopup.setAttribute("class", "container");

const headComments = document.createElement('div');
headComments.classList.add('head-comments');

const closeButton = document.createElement('button');
closeButton.setAttribute("type" ,"submit");
closeButton.classList.add('close-btn');
closeButton.innerHTML = '&times;';
headComments.appendChild(closeButton);


const dataComments = document.createElement('div');
dataComments.classList.add('data');
dataComments.innerHTML = `
<p></p>`

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

commentsPopup.append(headComments, dataComments, addComments);

document.body.append(commentsPopup);

closeButton.addEventListener('click', () => {
    commentsPopup.remove();
    location.reload();
})
popupBtn.addEventListener('click', () => {
    commentsPopup.style.display = 'flex';
})


    headComments.innerHTML += `<div class='imgText'>
    <img class='card-img' src=${e.strMealThumb}>
    <p>${e.strMeal}</p>
  </div>`;
