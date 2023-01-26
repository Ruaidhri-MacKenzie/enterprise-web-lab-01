const calculatePrice = (event) => {
	event.preventDefault();
	const s = document.getElementById("salary").value;
	const d = document.getElementById("days").value;
	console.log("Calculating price");
	console.log(s);
	console.log(d);
	const dailyRate = s / 365;
	const finalPrice = dailyRate * d;
	const roundedPrice = Math.round((finalPrice / 50)) * 50;
	document.getElementById("finalPrice").innerHTML = "£" + roundedPrice.toFixed(2);
};

const form = document.getElementById("budget");
form.addEventListener("click", calculatePrice);
