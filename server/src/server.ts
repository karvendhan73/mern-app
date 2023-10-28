import express from 'express';
import cors from "cors";

const app = express()

app.use(express.json());
app.use(cors())

app.use("/", async (req, res) => {
	res.status(200).json({ message: "Connencted successfully" });
});

export default app;
