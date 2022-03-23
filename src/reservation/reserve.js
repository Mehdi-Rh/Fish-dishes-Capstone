const closeBtn = document.getElementById('close-popup');
const popupWindow = document.querySelector('.container');
const updateArray = document.querySelector('.reservations-box');
const username = document.getElementById('name');
const startDate = document.getElementById('startDate');
const endDate = document.getElementById('endDate');
const reserveBtn = document.getElementById('reserveBtn');
const reserveContainer = document.querySelector('.reservations');
const form = document.getElementById('form');

closeBtn.addEventListener('click', () => {
  popupWindow.remove();
});

const reservationsBox = document.createElement('ul');
reservationsBox.className = 'reservations-box';
reserveContainer.appendChild(reservationsBox);

let count = 0;
reserveBtn.addEventListener('click', () => {
  count += 1;
  document.getElementById('counter').innerHTML = count;
})

const showPopup = document.querySelectorAll('#showReservationsPopup');
showPopup.addEventListener('click', () => {
})