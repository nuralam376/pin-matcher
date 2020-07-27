// Generates the 4 digit pin and set the pin in the input
function generatePin() {
	const pin = Math.round(Math.random() * 9000 + 1000);
	document.getElementById("pin").value = pin;
}
