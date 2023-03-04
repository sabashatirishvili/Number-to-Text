
const receiverInput = document.querySelector('#receiver');
const amountInput = document.querySelector('#amount');
const receivedDisplay = document.querySelector('#received')
const nameDisplay = document.querySelector('#name');
const button = document.querySelector('#btn');


button.addEventListener("click", function() {
	nameDisplay.textContent = receiverInput.value;
	receivedDisplay.textContent = amountInput.value;
})
