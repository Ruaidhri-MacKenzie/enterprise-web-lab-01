const calculatePrice = (req, res) => {
	const { salary, days } = req.body;
	const dailyRate = salary / 365;
	const finalPrice = dailyRate * days;
	const roundedPrice = Math.round((finalPrice / 50)) * 50;
	res.status(200).json({ roundedPrice });
};

module.exports = {
	calculatePrice,
};
