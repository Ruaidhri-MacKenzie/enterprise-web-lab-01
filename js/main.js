const calculatePrice = (event) => {
	event.preventDefault();
	const s = document.getElementById("salary").value;
	const d = document.getElementById("days").value;
	console.log("Calculating price");
	console.log(s);
	console.log(d);
	const dailyRate = s / 365;
	const finalPrice = dailyRate * d;
	document.getElementById("finalPrice").innerHTML = "£" + finalPrice.toFixed(2);
};

const form = document.getElementById("budget");
form.addEventListener("click", calculatePrice);
