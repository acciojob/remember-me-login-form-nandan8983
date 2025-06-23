//your JS code here. If required.
document.addEventListener("DOMContentLoaded", function () {
	const usernameInput = document.getElementById("username");
	const passwordInput = document.getElementById("password");
	const rememberMeCheckbox = document.getElementById("checkbox");
	const submitButton = document.getElementById("submit");
	const existingUserButton = document.getElementById("existing");

	const savedUsername = localStorage.getItem("username");
	const savedPassword = localStorage.getItem("password");

	if (savedUsername && savedPassword) {
		existingUserButton.style.display = "block";
	}

	document.getElementById("loginForm").addEventListener("submit", function (event) {
		event.preventDefault(); 

		const username = usernameInput.value;
		const password = passwordInput.value;

		alert(`Logged in as ${username}`);

		if (rememberMeCheckbox.checked) {
			localStorage.setItem("username", username);
			localStorage.setItem("password", password);
		} else {
			localStorage.removeItem("username");
			localStorage.removeItem("password");
		}
	});

	existingUserButton.addEventListener("click", function () {
		alert(`Logged in as ${savedUsername}`);
	});
});