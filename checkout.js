// Get the checkout button and modal container elements
const checkoutButton = document.getElementById('checkout-button');
const modalContainer = document.getElementById('modal-container');
const modalContent = document.getElementById('modal-content');
const closeButton = document.getElementById('close-modal');
const totalAmount = document.getElementById('total-amount');

// Add event listener to the checkout button
checkoutButton.addEventListener('click', () => {
  // Calculate the total amount
  const total = calculateTotal();

  // Update the total amount in the modal content
  totalAmount.textContent = total.toFixed(2);

  // Show the modal container
  modalContainer.style.display = 'block';
});

// Add event listener to the close button
closeButton.addEventListener('click', () => {
  // Hide the modal container
  modalContainer.style.display = 'none';
});

// Function to calculate the total amount
function calculateTotal() {
  // TO DO: implement the logic to calculate the total amount
  // For example:
  const cart = [
    { price: 10.99, quantity: 2 },
    { price: 5.99, quantity: 3 },
  ];
  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  return total;
}