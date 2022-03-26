import _ from 'lodash';
import './style.css';
import { displayItems } from './modules/displayMain.js'
import { addLikes } from './modules/likes';
import displayPopup from './modules/commentPopup.js';
// import displayReservationPopup from './modules/reservePopup.js';
import { getComment, addComment } from './modules/comments.js'
import { addReservation, getReservation } from './modules/reservations.js';

import displayReservationPopup from './modules/reservePopup.js'



const row = document.querySelector('.row')
const urlItems = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood'

/* Generate urls of the involvement API */
let urlStart = "https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/"
const apiId = "t9up9m5T6uECqwieuC71"
const urlLike = urlStart + apiId + "/likes"
let urlComment = urlStart + apiId + "/comments"
const urlReservation = urlStart + apiId + "/reservations"

/* Run functionalities */
displayItems(row, urlItems, urlLike)
addLikes(urlLike, urlItems)
displayPopup()



document.addEventListener('click', (event) => {
    if (event.target && event.target.classList.contains('reservations')) {
        const title = document.querySelector('.meal-title').innerText;
        const image = document.querySelector('.meal-image').src;
        const id = event.target.parentElement.id;
        console.log(id);
        displayReservationPopup(title, image);
        // const reservations = getReservation(id);
        // console.log(event.target);
        // // document.querySelector('.data').innerHTML = '';
        // console.log(reservations);
        // if (event.target && event.target.classList.contains('reserveBtn')) {
        //     e.preventDefault();
        //     addReservation(id, input.value, text.value);
        // }
    }
})