// Add cards to the modal

const cardsProducts = document.querySelectorAll('.card');

// Selecting the card elements




cardsProducts.forEach(card => {
  card.addEventListener('click', e => {

    // Take any relevant data from card // Tomo los datos relevantes de cada card
    const card = e.currentTarget;
    const cardTitle = card.querySelector('.card__heading');
    const cardDescription = card.querySelector('.card__description');
    const cardPrice = card.querySelector('.card__list__item:last-of-type');

    // Creating a new div for the new car item // Creo un nuevo div para cada nuevo item agregado
    const newItem = document.createElement('div');
    newItem.classList.add('modal-cart__item');
    newItem.innerHTML = `
        <span class="modal-cart__item-title">${cardTitle.innerHTML}</span>
        <span class="modal-cart__item-description">${cardDescription.innerHTML}</span>
        <span class="modal-cart__item-price">${cardPrice.innerHTML}</span>
    `;

    // Adding a new element to the car // Agrego un nuevo elemento
    const cartItemsContainer = document.querySelector('.modal-cart__items-container');
    cartItemsContainer.appendChild(newItem);

    // Updating the price and quantity // Calculo la sumatoria de precio y cantidad
    const totalAmount = document.querySelector('.modal-cart__total-amount');
    const itemPrice = parseFloat(cardPrice.innerHTML.replace('$',''));
    totalAmount.innerHTML = `$ ${(parseFloat(totalAmount.innerHTML.replace('$','')) + itemPrice).toFixed(2)}`;
  });
});


