let userInputNumber = "";

// Generates the 4 digit pin and set the pin in the input
function generatePin() {
	const pin = Math.round(Math.random() * 9000 + 1000);
	document.getElementById("pin").value = pin;
}

// Handles the number user enters
function handleUserInput(number) {
	//Checks whether the user inputs only 4 characters
	if (userInputNumber.length >= 4) {
		return;
	}
	// Add previous number with the newest and set the user number
	userInputNumber += number.toString();
	document.getElementById("userNumber").value = userInputNumber;
}
