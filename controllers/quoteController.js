const Quote = require("../models/Quote.js");

const createQuote = async (req, res) => {
	try {
		const data = req.body;
		const quote = await Quote.create(data);
		res.status(201).json({ quote });
	}
	catch(error) {
		console.error(error.message);
		res.status(500).json({ error: "Error occurred while creating location" });
	}
};

const getQuotes = async (req, res) => {
	try {
		const quotes = await Quote.find().exec();
		res.status(200).json({ quotes });
	}
	catch(error) {
		console.error(error.message);
		res.status(500).json({ error: "Error occurred while getting locations and videos" });
	}
};

const getQuoteById = async (req, res) => {
	try {
		const id = req.params.id;
		const quote = await Quote.findById(id).exec();
		res.status(200).json({ quote });
	}
	catch(error) {
		console.error(error.message);
		res.status(500).json({ error: "Error occurred while getting locations and videos" });
	}
};

const updateQuoteById = async (req, res) => {
	try {
		const id = req.params.id;
		const data = req.body;
		const success = await Quote.findOneAndUpdate({ _id: id }, { $set: { ...data, lastUpdateDate: Date.now() } }).exec();
		res.status(200).json({ success });
	}
	catch(error) {
		console.error(error.message);
		res.status(500).json({ error: "Error occurred while getting locations and videos" });
	}
};

const deleteQuoteById = async (req, res) => {
	try {
		const id = req.params.id;
		const success = await Quote.deleteOne({ _id: id }).exec();
		res.status(200).json({ success });
	}
	catch(error) {
		console.error(error.message);
		res.status(500).json({ error: "Error occurred while getting locations and videos" });
	}
};

module.exports = {
	createQuote,
	getQuotes,
	getQuoteById,
	updateQuoteById,
	deleteQuoteById,
};
