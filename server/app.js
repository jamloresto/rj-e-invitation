const express = require("express");
const path = require("path");
const helmet = require("helmet");
const cors = require("cors");

const app = express();

app.use(
	cors({
		origin: "http://localhost:5173",
		methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
		allowedHeaders: ["Content-Type", "Authorization"],
		credentials: true,
	})
);

app.use(express.json());
app.use(helmet());

app.use(express.static(path.join(__dirname, "../public_html/dist")));

app.get("*", (req, res) => {
	res.sendFile(path.join(__dirname, "../public_html/dist/index.html"));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`);
});

module.exports = app;
