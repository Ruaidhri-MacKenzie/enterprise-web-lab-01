const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/router.js");
const quoteRouter = require("./routes/quoteRouter.js");

const app = express();
const PORT = process.env.PORT || 8080;
const DBURI = process.env.DBURI || "mongodb://127.0.0.1:27017/quote";

// Body parser - parse JSON in request body
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve static files
app.use(express.static(__dirname + "/public"));

// Routes
app.get("/", (req, res) => res.sendFile(__dirname + "/public/index.html"));
app.use("/calc", router);
app.use("/quote", quoteRouter);

// Connect to database
mongoose.set("strictQuery", false);
mongoose.connect(DBURI);

// Listen for requests
app.listen(PORT, () => console.log(`Server listening on port ${PORT}...`));
