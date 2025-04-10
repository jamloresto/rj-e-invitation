const express = require("express");
const path = require("path");
const helmet = require("helmet");
const cors = require("cors");

const app = express();

// CORS setup
app.use(
	cors({
		origin: "http://localhost:5173", // change this for production
		methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
		allowedHeaders: ["Content-Type", "Authorization"],
		credentials: true,
	})
);

// Middleware
app.use(express.json());
app.use(helmet());

// Serve static frontend
app.use(express.static(path.join(__dirname, "../public_html/dist")));

// ✅ Handle favicon.ico safely to prevent 500s
app.get("/favicon.ico", (req, res) => res.status(204).end());

// ✅ Add test route (make sure this stays above wildcard!)
app.get("/api/hello", (req, res) => {
	res.json({ message: "Hello from the backend!" });
});

// ✅ Wildcard route: must be **last**, only for SPA fallback
app.get("*", (req, res) => {
	// Send index.html for all other requests
	res.sendFile(path.join(__dirname, "../public_html/dist/index.html"));
});

// Error handling (optional, helpful during debugging)
app.use((err, req, res, next) => {
	console.error("🔥 Uncaught error:", err.stack);
	res
		.status(500)
		.json({ error: "Internal Server Error", details: err.message });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
	console.log(`✅ Server running on port ${PORT}`);
});

module.exports = app;
