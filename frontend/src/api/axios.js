// import axios from "axios";

// const api = axios.create({
//   baseURL: "http://localhost:5000/api/v1",
// });

// api.interceptors.request.use((config) => {
//   const token = localStorage.getItem("token");
//   if (token) {
//     config.headers.Authorization = `Bearer ${token}`;
//   }
//   return config;
// });

// export default api;



// import axios from "axios";

// const api = axios.create({
//   baseURL: "http://localhost:5000/api/v1",
//   withCredentials: true,
// });

// export default api;

import axios from "axios";

const api = axios.create({
  baseURL: "https://mern-auth-zmln.onrender.com/api/v1",
  withCredentials: true, // ✅ VERY IMPORTANT
});

export default api;
