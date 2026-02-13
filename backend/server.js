// // import app from "./src/app.js";
// // import connectDB from "./src/config/db.js";
// // import dotenv from "dotenv";

// // dotenv.config();
// // connectDB();

// // const PORT = process.env.PORT || 5000;
// // app.listen(PORT, () =>
// //   console.log(`🚀 Server running on port ${PORT}`)
// // );

// import dotenv from "dotenv";
// import connectDB from "./src/config/db.js";
// import app from "./src/app.js";

// dotenv.config();




// const PORT = process.env.PORT || 5000;

// app.listen(PORT, () => {
//   connectDB();
//   console.log(`🚀 Server running on port ${PORT}`);
// });

import dotenv from "dotenv";
import connectDB from "./src/config/db.js";
import app from "./src/app.js";

dotenv.config();
connectDB();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
