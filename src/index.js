import _ from 'lodash';
import './style.css';
import {displayScore} from './modules/getData.js'

const row = document.querySelector('.row')
const url = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood'

displayScore(row, url)
