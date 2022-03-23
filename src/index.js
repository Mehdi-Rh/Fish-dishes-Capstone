import _ from 'lodash';
import './style.css';
import {displayItems} from './modules/displayMain.js'

const row = document.querySelector('.row')
const urlItems = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood'

/* Generate urls of the involvment API */ 
let urlStart = "https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/"
const apiId = "t9up9m5T6uECqwieuC71"
const urlLike = urlStart + apiId + "/likes"
let urlComment = urlStart + apiId + "/comments"
const urlReservation = urlStart + apiId + "/reservations"

displayItems(row, urlItems)
