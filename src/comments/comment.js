const commentsPopup = document.getElementById('popup');
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

closeButton.addEventListener('click', () => {
    commentsPopup.style.display = 'none';

})