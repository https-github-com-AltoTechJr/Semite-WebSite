function handleItemClick(clickedLi) {
    const targetId = clickedLi.getAttribute("data-target");


    const liItens = document.querySelectorAll('.sub-navigation-button .day-button');


    liItens.forEach(item => item.classList.remove('active'));


    clickedLi.classList.add('active');


    const eventDays = document.querySelectorAll('.Event-day');


    eventDays.forEach(day => day.classList.remove('active'));

    const targetEventDay = document.getElementById(targetId);
    targetEventDay.classList.add('active');
}