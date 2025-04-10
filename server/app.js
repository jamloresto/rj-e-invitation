const express = require("express");
const path = require("path");
const helmet = require("helmet");
const cors = require("cors");

// import { connectToDatabase } from "./config/db";

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

app.get("/api/hello", (req, res) => {
	res.json({ message: "Hello from the backend!" });
});

// app.use("/api/rsvp", rsvpRoutes);

app.get("*", (req, res) => {
	res.sendFile(path.join(__dirname, "../public_html/dist/index.html"));
});

// connectToDatabase()
// 	.then(() => {
// 		const PORT = process.env.PORT || 3000;
// 		app.listen(PORT, () => {
// 			console.log(`Server running on http://localhost:${PORT}`);
// 		});
// 	})
// 	.catch((error) => {
// 		console.error("Failed to connect to the database.", error);
// 	});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`);
});

module.exports = app;
