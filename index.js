const card = document.querySelector('.card');

card.addEventListener('click', function() {
    // al hacer click, agrega clase css open al card
    card.classList.toggle('open')
});