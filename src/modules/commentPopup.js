import '../comments/comment.css';
const displayPopup = (title, image, description = '') => {
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
commentsPopup.style.display = 'flex';
document.querySelector('.popup-section').append(commentsPopup);
document.querySelector('.row').style.display = 'none';

const btn = document.getElementById('closeBtn')
btn.addEventListener('click', () => {
    commentsPopup.remove();
    // location.reload();
})

headComments.innerHTML += `<div class='imgText'>
<h2>${title}</h2>
<img class='card-img' src=${image}>
<p>${description}</p>
</div>`;

}

export default displayPopup;
