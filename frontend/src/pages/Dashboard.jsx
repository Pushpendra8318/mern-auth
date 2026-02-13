

import { useEffect, useState } from "react";
import api from "../api/axios";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function Dashboard() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");
  const navigate = useNavigate();

  // ✅ Load tasks
  // useEffect(() => {
  //   const fetchTasks = async () => {
  //     try {
  //       const res = await api.get("/tasks");
  //       setTasks(res.data);
  //     } catch (error) {
  //       console.log(error);
  //       navigate("/login"); // if unauthorized
  //     }
  //   };

  //   fetchTasks();
  // }, [navigate]);
  
  useEffect(() => {
  const fetchTasks = async () => {
    try {
      const res = await api.get("/tasks");
      setTasks(res.data);
    } catch (error) {
      navigate("/login");
    }
  };

  fetchTasks();
}, [navigate]);


  // ✅ Add task
  const addTask = async () => {
    if (!title.trim()) return;

    try {
      await api.post("/tasks", { title });
      setTitle("");

      const res = await api.get("/tasks");
      setTasks(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  // ✅ Delete task
  const deleteTask = async (id) => {
    try {
      await api.delete(`/tasks/${id}`);
      setTasks((prev) => prev.filter((t) => t._id !== id));
    } catch (error) {
      console.log(error);
    }
  };

  // ✅ Proper Logout
  const logoutHandler = async () => {
    try {
      await api.post("/auth/logout");
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <motion.div
      className="container"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <div className="card wide">
        <div className="dashboard-header">
          <h2 className="dashboard-title">Dashboard</h2>
          <button className="logout-btn" onClick={logoutHandler}>
            Logout
          </button>
        </div>

        <div className="row">
          <input
            placeholder="New task"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <button onClick={addTask}>Add</button>
        </div>

        {tasks.map((task) => (
          <motion.div
            key={task._id}
            className="task"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <span>{task.title}</span>
            <button onClick={() => deleteTask(task._id)}>❌</button>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
