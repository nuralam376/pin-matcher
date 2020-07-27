// Generates the 4 digit pin and set the pin in the input
function generatePin() {
	const pin = Math.floor(Math.random() * 9000 + 1000);
	document.getElementById("pin").value = pin;
}

// Handles the number user enters
function handleUserInput(number) {
	let userInput = document.getElementById("userNumber").value;

	//Checks whether the user enters more than 4 characters
	if (userInput.length >= 4) {
		return;
	}
	// Add previous number with the newest and set the user number
	userInput += number;
	document.getElementById("userNumber").value = userInput;
}

// Checks whether any try is left
function checkTryLeft() {
	const tryLeft = document.getElementById("tryLeftCount").innerText;
	let tryLeftNumber = parseInt(tryLeft);

	// Checks if any try left
	if (tryLeftNumber != 0) {
		return tryLeftNumber;
	}
	document.getElementById("pin-unmatched").style.display = "none";
	alert("No try left");
	return 0;
}

// Checks the generated pin with the user typed number and shows the message
function checkPinWithUserInput() {
	let tryLeftNumber = checkTryLeft();
	if (tryLeftNumber == 0) {
		return;
	}
	const pin = document.getElementById("pin").value;
	const userInput = document.getElementById("userNumber").value;

	// If the pin or user typed number is empty, throw an alert message
	if (pin == "" || userInput == "") {
		document.getElementById("pin-matched").style.display = "none";
		alert("Pin and User input field cannot be empty");
		return;
	}

	// Check, Shows and hide the message
	if (pin == userInput) {
		document.getElementById("pin-matched").style.display = "block";
		document.getElementById("pin-unmatched").style.display = "none";
		document.getElementById("userNumber").value = "";
		document.getElementById("pin").value = "";
		tryLeftNumber = 3;
	} else {
		tryLeftNumber--;
		document.getElementById("pin-unmatched").style.display = "block";
		document.getElementById("pin-matched").style.display = "none";
	}
	document.getElementById("tryLeftCount").innerText = tryLeftNumber;
}

// Clears the current user input
document.getElementById("clear").addEventListener("click", function () {
	document.getElementById("userNumber").value = "";
});

// Deletes the last character of the user input
const deleteBtn = document.getElementById("delete");

deleteBtn.addEventListener("click", function () {
	let userInput = document.getElementById("userNumber").value;
	userInput = userInput.slice(0, -1);
	document.getElementById("userNumber").value = userInput;
});
