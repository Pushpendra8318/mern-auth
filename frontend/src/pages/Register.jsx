import { useState } from "react";
import api from "../api/axios";
import { motion } from "framer-motion";
import { useNavigate, Link } from "react-router-dom";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  // const submitHandler = async (e) => {
  //   e.preventDefault();
  //   const res = await api.post("/auth/register", { name, email, password });
  //   localStorage.setItem("token", res.data.token);
  //   navigate("/dashboard");
  // };



const submitHandler = async (e) => {
  e.preventDefault();

  try {
    await api.post("/auth/register", { name, email, password });
    navigate("/dashboard");
  } catch (error) {
    alert("Registration failed");
  }
};





  return (
    <motion.div className="container" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <form className="card" onSubmit={submitHandler}>
        <h2>Register</h2>
        <input placeholder="Name" onChange={(e) => setName(e.target.value)} />
        <input placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
        <button>Register</button>
        <p>
          Already registered? <Link to="/login">Login</Link>
        </p>
      </form>
    </motion.div>
  );
}
