import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";

import akshadRoutes from "./routes/akshad.routes.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({ limig: "50mb" }));

app.use("/api/v1/akshad", akshadRoutes);

app.get("/", (req, res) => {
  res.status(200).json({ message: "Hello from Akshad" });
});

app.listen(8080, () => console.log("Server has started on port 8080"));
