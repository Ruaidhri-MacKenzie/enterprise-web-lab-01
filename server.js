const express = require("express");
const router = require("./router.js");

const app = express();
const PORT = process.env.PORT || 8080;

// Body parser - parse JSON in request body
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve static files
app.use(express.static(__dirname + "/public"));

// Routes
app.get("/", (req, res) => res.sendFile(__dirname + "/public/index.html"));
app.use("/calc", router);

// Listen for requests
app.listen(PORT, () => console.log(`Server listening on port ${PORT}...`));
