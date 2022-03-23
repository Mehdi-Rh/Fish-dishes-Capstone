import _ from 'lodash';
import './style.css';
import {displayItems} from './modules/getData.js'

const row = document.querySelector('.row')
const urlItems = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood'

displayItems(row, urlItems)
