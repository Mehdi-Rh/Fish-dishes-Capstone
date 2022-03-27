import './style.css';
import displayItems from './modules/displayMain.js';
import { addLikes } from './modules/likes.js';
import displayPopup from './modules/commentPopup.js';

const row = document.querySelector('.row');
const urlItems = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood';

/* Generate urls of the involvement API */
const urlStart = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/';
const apiId = 't9up9m5T6uECqwieuC71';
const urlLike = `${urlStart + apiId}/likes`;

/* Run functionalities */
displayItems(row, urlItems, urlLike);
addLikes(urlLike, urlItems);
displayPopup();
