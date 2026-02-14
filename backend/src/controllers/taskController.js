// import Task from "../models/Task.js";

// export const createTask = async (req, res, next) => {
//   try {
//     const { title } = req.body;

//     if (!title) {
//       return res.status(400).json({ message: "Title is required" });
//     }

//     const task = await Task.create({
//       title,
//       user: req.user._id
//     });

//     res.status(201).json(task);
//   } catch (error) {
//     next(error);
//   }
// };

// export const getTasks = async (req, res, next) => {
//   try {
//     const tasks = await Task.find({ user: req.user._id });
//     res.json(tasks);
//   } catch (error) {
//     next(error);
//   }
// };

// export const updateTask = async (req, res, next) => {
//   try {
//     const task = await Task.findById(req.params.id);

//     if (!task) {
//       return res.status(404).json({ message: "Task not found" });
//     }

//     task.title = req.body.title ?? task.title;
//     task.completed = req.body.completed ?? task.completed;

//     const updatedTask = await task.save();
//     res.json(updatedTask);
//   } catch (error) {
//     next(error);
//   }
// };

// export const deleteTask = async (req, res, next) => {
//   try {
//     const task = await Task.findById(req.params.id);

//     if (!task) {
//       return res.status(404).json({ message: "Task not found" });
//     }

//     await task.deleteOne();
//     res.json({ message: "Task deleted" });
//   } catch (error) {
//     next(error);
//   }
// };







import Task from "../models/Task.js";

/* ======================
   CREATE TASK
   (Only logged-in user)
====================== */
export const createTask = async (req, res, next) => {
  try {
    const { title } = req.body;

    if (!title) {
      return res.status(400).json({ message: "Title is required" });
    }

    const task = await Task.create({
      title,
      user: req.user._id, // ✅ owner assigned
    });

    res.status(201).json(task);
  } catch (error) {
    next(error);
  }
};

/* ======================
   GET TASKS (user-only)
====================== */
export const getTasks = async (req, res, next) => {
  try {
    const tasks = await Task.find({ user: req.user._id }); // ✅ only own tasks
    res.status(200).json(tasks);
  } catch (error) {
    next(error);
  }
};

/* ======================
   UPDATE TASK (owner only)
====================== */
export const updateTask = async (req, res, next) => {
  try {
    const task = await Task.findById(req.params.id);

    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }

    // 🔒 OWNER CHECK
    if (task.user.toString() !== req.user._id.toString()) {
      return res.status(403).json({ message: "Not authorized" });
    }

    task.title = req.body.title ?? task.title;
    task.completed = req.body.completed ?? task.completed;

    const updatedTask = await task.save();
    res.status(200).json(updatedTask);
  } catch (error) {
    next(error);
  }
};

/* ======================
   DELETE TASK (owner only)
====================== */
export const deleteTask = async (req, res, next) => {
  try {
    const task = await Task.findById(req.params.id);

    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }

    // 🔒 OWNER CHECK
    if (task.user.toString() !== req.user._id.toString()) {
      return res.status(403).json({ message: "Not authorized" });
    }

    await task.deleteOne();
    res.status(200).json({ message: "Task deleted" });
  } catch (error) {
    next(error);
  }
};
