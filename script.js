// Grab Everything
const priceInput    = document.querySelector('[name=price]');
const quantityInput = document.querySelector('[name=quantity]');
const total         = document.querySelector('.total-cost');
const subLabel      = document.querySelector('.sub-label');

// Functionality
function calculateTotalCost() {
  const price    = priceInput.value;
  const quantity = quantityInput.value;
  const cost     = price * quantity;
  total.innerText = '$' + cost.toFixed(2);
}

function updateSubLabel() {
  const quantity = quantityInput.value;
  subLabel.innerText = quantity;
}

// On First Run
calculateTotalCost();

//Event Listener
priceInput.addEventListener('input', calculateTotalCost);
quantityInput.addEventListener('input', calculateTotalCost);
quantityInput.addEventListener('input', updateSubLabel);
