const closeBtn = document.getElementById('close-popup');
const popupWindow = document.querySelector('.container');
const updateArray = document.querySelector('.reservations-box');
const username = document.getElementById('name');
const startDate = document.getElementById('startDate');
const endDate = document.getElementById('endDate');
const reserveBtn = document.getElementById('reserveBtn');
const reserveContainer = document.querySelector('.reservations');

closeBtn.addEventListener('click', () => {
    popupWindow.remove();
});

const reservationsBox = document.createElement('ul');
reservationsBox.className = 'reservations-box';
reserveContainer.appendChild(reservationsBox);

reserve = (add) => {
    reservationsBox.innerHTML += `
        <li class="item">${add.startDate} - ${add.endDate} by ${add.name}</li>
    `;
}

const insertInTo = document.addEventListener('load', () => {
    reservationsBox.push(username.value, startDate.value, endDate.value)
})
