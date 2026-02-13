

import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";

import authRoutes from "./routes/authRoutes.js";
import taskRoutes from "./routes/taskRoutes.js";
import { errorHandler } from "./middleware/errorMiddleware.js";

const app = express();

app.use(express.json());
app.use(cookieParser());

app.use(cors({
  origin: [
    "https://mern-auth-nu-three.vercel.app/"
  ],
  credentials: true
}));


app.get("/", (req, res) => {
  res.send("API is running...");
});

app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/tasks", taskRoutes);

app.use(errorHandler);

export default app;
