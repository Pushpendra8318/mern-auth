

import axios from "axios";

const api = axios.create({
  baseURL: "https://mern-auth-zmln.onrender.com/api/v1",
  withCredentials: true, // ✅ VERY IMPORTANT
});

export default api;
