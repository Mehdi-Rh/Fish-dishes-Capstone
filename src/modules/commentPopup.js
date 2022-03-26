import '../comments/comment.css';
import {addComment, getComment} from './comments.js'


const setPopup = (title, image, description = '') => {
  const commentsPopup = document.createElement('div');
  commentsPopup.setAttribute("id", "popup");
  commentsPopup.setAttribute("class", "container-popup");

  const headComments = document.createElement('div');
  headComments.classList.add('head-comments');

  const closeButton = document.createElement('i');
  closeButton.className = 'fa fa-times';
  closeButton.id = 'closeBtn'

  const dataComments = document.createElement('div');
  dataComments.classList.add('data');
  dataComments.id = 'newData';

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
  formButton.setAttribute("type", "button");
  formButton.classList.add('form-btn');
  formButton.textContent = 'Comment';
  form.append(inputField, textArea, formButton);

  addComments.append(addTitle, form);

  const update = document.createElement('ul');
  update.classList.add('new-update');

  
  const updateComments = () => {
      
    const li = document.createElement('li');
    const date = new Date();
    const day = date.getDay();
    const month = date.getMonth();
    const year = date.getFullYear();
    li.innerHTML += `
      <li class="userInput">
      ${year} ${-month} ${-day} </br> ${inputField.value} : ${textArea.value}
      </li>
      `;
    update.append(li);
  };
formButton.addEventListener('click', () => {
  updateComments();
  inputField.value = '';
  textArea.value = '';
});


  commentsPopup.append(headComments, addComments, update, closeButton);
  commentsPopup.style.display = 'flex';
  document.querySelector('.popup-section').append(commentsPopup);
  document.querySelector('.row').style.display = 'none';

  const btn = document.getElementById('closeBtn')
  btn.addEventListener('click', () => {
      commentsPopup.remove();
      location.reload();
  })

  headComments.innerHTML += `<div class='imgText'>
  <h2>${title}</h2>
  <img class='card-img' src=${image}>
  <p>${description}</p>
  </div>`;

}

const displayPopup = () => {
  document.addEventListener('click', (event) => {
    if (event.target && event.target.classList.contains('comments')) {
        const card = event.target.parentElement
       const title = card.querySelector('.meal-title').innerText;
       const image = card.querySelector('.meal-image').src;
       const id = event.target.parentElement.id;
       setPopup(title, image);
      getComment(id)
      .then(response => {
        if (response.length){
          // Use this block of code to create your box

          response.forEach(element => {
            const commentsData = document.getElementById('newData')
            commentsData.innerHTML =`<p>${element.creation_date}</p>
            <p>${element.comment}</p>
            <p>${element.username}</p>`

          // console.log(element.creation_date)
          // console.log(element.comment)
          // console.log(element.username)
          // element.creation_date
          // element.comment
          // element.username   
          });
     
      }
    })



      
      
      document.querySelector('.data').innerHTML = '';  

        // Post comment on the API
      document.addEventListener('click', (e) => {
        if (e.target.classList.contains('form-btn')) {
          const input = document.querySelector('.input')
          const text = document.querySelector('.text-area');
      
          addComment(id,input.value, text.value) 
        }
      })

     

    }
  })
}

export default displayPopup;
