import { useState } from "react";
import api from "../api/axios";
import { motion } from "framer-motion";
import { useNavigate, Link } from "react-router-dom";
// import axios from 'axios'

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
    const res = await api.post("/auth/login", { email, password });
    // const res = await axios.post("http://localhost:5000/api/v1/auth/login", {email, password}, {withCredentials:true})
    localStorage.setItem("token", res.data.token);
    navigate("/dashboard");
  };

  return (
    <motion.div className="container" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <form className="card" onSubmit={submitHandler}>
        <h2>Login</h2>
        <input placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
        <button>Login</button>
        <p>
          No account? <Link to="/register">Register</Link>
        </p>
      </form>
    </motion.div>
  );
}
