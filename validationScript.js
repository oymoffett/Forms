// JavaScript code for form validation
const form = document.getElementById('myForm');
form.addEventListener('submit', validate);

function validate(event) {
	// Prevent form from submitting
	event.preventDefault();
	
    // Retrieve the input field value
	const inputField = document.getElementById('inputField');
	const inputValue = inputField.value.trim();
	
    // Regular expression pattern for alphanumeric input
	const characters = /^[a-zA-Z0-9]+$/;
	
    // Check if the input value matches the pattern
	if (characters.test(inputValue)) 
		{
			// Valid input: display confirmation and submit the form
			alert('Form submission was successful');
			form.reset();
		} 
	
	else 
		{
			// Invalid input: display error message
			const message = document.createElement('p');
			message.id = 'errorMessage';
			message.innerText = 'The input can only be alphanumeric.';
			form.appendChild(message);
		}
	
}