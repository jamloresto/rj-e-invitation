import express from "express";
import path from "path";
import helmet from "helmet";
import cors from "cors";

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

app.use(express.static(path.join(__dirname, "../client/dist")));

// app.use("/api/rsvp", rsvpRoutes);

app.get("*", (req, res) => {
	res.sendFile(path.join(__dirname, "../client/dist/index.html"));
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

export default app;