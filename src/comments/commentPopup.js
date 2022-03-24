import {getData} from "../modules/getData.js"
import {addComment, getComment} from "../modules/comments.js"

const urlItems = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood'

let data = await getData(urlItems) // Copy this line to get your data 
console.log(data[1]);

let e = data[0]

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

headComments.innerHTML += `<div class='imgText' id=${e.idMeal}>
<img class='card-img' src=${e.strMealThumb}>
<p>${e.strMeal}</p>
</div>`;


formButton.addEventListener('click', (e) => {
  e.preventDefault();
  addComment('mango','galaxy','hello');
  
})

document.addEventListener('click', (event) => {
  if (event.target && event.target.classList.contains('popup-btn')) {
    const comments = getComment('mango');
    document.querySelector('.data').innerHTML = '';
    comments.then(data => {
      data.forEach(newData => {
        const comment = `<div>${newData.creation_date} ${newData.username} ${newData.comment}</div>`
        document.querySelector('.data').innerHTML += comment;
      });
    });


  }
})
