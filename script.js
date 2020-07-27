let userInputNumber = "";
const failedTry = document.getElementById("failed-try").innerText;
let failedTryNumber = parseInt(failedTry);

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

// Checks the generated pin with the user typed number and shows the message
function checkPinWithUserInput() {
	const pin = document.getElementById("pin").value;

	// Checks if any try left
	if (failedTryNumber == 0) {
		alert("No try left");
		return;
	}

	// If the pin or tje user typed number is empty, alert a message
	if (pin == "" || userInputNumber == "") {
		alert("Pin and User input field cannot be empty");
		return;
	}
	const pinNumber = parseInt(pin);
	const userInput = parseInt(userInputNumber);

	// Shows the message
	if (pinNumber == userInput) {
		userInputNumber = "";
		document.getElementById("pin-matched").style.display = "block";
		document.getElementById("pin-unmatched").style.display = "none";
		document.getElementById("userNumber").value = userInputNumber;
		document.getElementById("pin").value = "";
		failedTryNumber = 3;
	} else {
		failedTryNumber--;
		document.getElementById("pin-unmatched").style.display = "block";
	}
	document.getElementById("failed-try").innerText = failedTryNumber;
}

// Clears the current user input
document.getElementById("clear").addEventListener("click", function () {
	userInputNumber = "";
	document.getElementById("userNumber").value = userInputNumber;
});

// Deletes the last character of the user input
const deleteBtn = document.getElementById("delete");

deleteBtn.addEventListener("click", function () {
	userInputNumber = userInputNumber.slice(0, -1);
	document.getElementById("userNumber").value = userInputNumber;
});
