import _ from 'lodash';
import './style.css';
import { displayItems } from './modules/displayMain.js'
import { addLikes } from './modules/likes';
import displayPopup from './modules/commentPopup.js';


const row = document.querySelector('.row')
const urlItems = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood'

/* Generate urls of the involvement API */
let urlStart = "https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/"
const apiId = "t9up9m5T6uECqwieuC71"
const urlLike = urlStart + apiId + "/likes"
// let urlComment = urlStart + apiId + "/comments"
// const urlReservation = urlStart + apiId + "/reservations"

/* Run functionalities */
displayItems(row, urlItems, urlLike)
addLikes(urlLike, urlItems)
displayPopup()

const show = (data) => {
    displayItems(row, data)
    const reservationBtn = document.querySelector('.reservationBtn');
    console.log(reservationBtn);
}

const showPopupReserve = document.querySelector('.container');
const reserveBtn = document.querySelector('.reservationBtn');
reserveBtn.addEventListener('click', () => {
    showPopupReserve.style.display = 'flex';
})

export async function getData() {
    let data = await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood')
    data = await data.json();
    show(data.meals);
    return data.meals;
}