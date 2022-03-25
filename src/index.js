import _ from 'lodash';
import './style.css';
import {displayItems} from './modules/displayMain.js'
import {addLikes} from './modules/likes';
import displayPopup from './modules/commentPopup.js';
import {getComment, addComment} from './modules/comments.js'


const row = document.querySelector('.row')
const urlItems = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood'

/* Generate urls of the involvment API */ 
let urlStart = "https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/"
const apiId = "t9up9m5T6uECqwieuC71"
const urlLike = urlStart + apiId + "/likes"
let urlComment = urlStart + apiId + "/comments"
const urlReservation = urlStart + apiId + "/reservations"

/* Run functionnalities */
displayItems(row, urlItems, urlLike)
addLikes(urlLike, urlItems)

  
  document.addEventListener('click', (event) => {
    if (event.target && event.target.classList.contains('comments')) {
       const title = document.querySelector('.meal-title').innerText;
       const image = document.querySelector('.meal-image').src;
       const text = document.querySelector('.text-area');
       const input = document.querySelector('.input')
       const id = event.target.parentElement.id;
       console.log(id);
       displayPopup(title, image);
      const comments = getComment(id);
      console.log(event.target);
      document.querySelector('.data').innerHTML = '';
    //   comments.then(data => {
    //     data.forEach(newData => {
    //       const comment = `<div>${newData.creation_date} ${newData.username} ${newData.comment}</div>`
    //       document.querySelector('.data').innerHTML += comment;
    //     });
    //   });  
    console.log(comments);
      if (event.target && event.target.classList.contains('form-btn')) {
          e.preventDefault();
          addComment(id, input.value, text.value);
      }
    }
  })
