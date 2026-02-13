// // import express from "express";

// // const app = express();
// // app.use(express.json());

// // app.get("/", (req, res) => {
// //   res.send("API is running...");
// // });

// // export default app;

// import express from "express";
// import cors from "cors";
// import authRoutes from "./routes/authRoutes.js";
// import taskRoutes from "./routes/taskRoutes.js";
// import { errorHandler } from "./middleware/errorMiddleware.js";

// const app = express();

// app.use(cors());
// app.use(express.json());

// app.get("/", (req, res) => {
//   res.send("API is running...");
// });

// app.use("/api/v1/auth", authRoutes);
// app.use("/api/v1/tasks", taskRoutes);

// app.use(errorHandler);

// export default app;

// import express from "express";
// import cookieParser from "cookie-parser";
// import cors from "cors";

// import authRoutes from "./routes/authRoutes.js";
// import taskRoutes from "./routes/taskRoutes.js";
// import { errorHandler } from "./middleware/errorMiddleware.js";

// const app = express();

// // ✅ Middleware
// app.use(express.json());     // parse JSON body
// app.use(cookieParser());     // parse cookies

// // (CORS is optional if backend-only, but safe to keep)
// app.use(cors({
//   origin: "http://localhost:5173",
//   credentials: true
// }));


// // Test route
// app.get("/", (req, res) => {
//   res.send("API is running...");
// });

// // Routes
// app.use("/api/v1/auth", authRoutes);
// app.use("/api/v1/tasks", taskRoutes);

// // Error handler (LAST)
// app.use(errorHandler);

// export default app;

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
    "http://localhost:5173",
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
