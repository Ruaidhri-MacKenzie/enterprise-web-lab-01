const form = document.getElementById("budget");
const salaryInput = document.getElementById("salary");
const daysInput = document.getElementById("days");

const submitForm = async (event) => {
	event.preventDefault();
	const formData = {
		salary: salaryInput.value,
		days: daysInput.value,
	};

  const response = await fetch("/calc", {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify(formData),
	});

	const data = await response.json();
	displayPrice(data.roundedPrice);
};

const displayPrice = (price) => {
	document.getElementById("finalPrice").innerHTML = "£" + price.toFixed(2);
};

form.addEventListener("submit", submitForm);
