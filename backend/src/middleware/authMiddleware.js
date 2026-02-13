// // import jwt from "jsonwebtoken";
// // import User from "../models/User.js";

// // export const protect = async (req, res, next) => {
// //   const token = req.headers.authorization?.split(" ")[1];

// //   if (!token)
// //     return res.status(401).json({ message: "Not authorized" });

// //   const decoded = jwt.verify(token, process.env.JWT_SECRET);
// //   req.user = await User.findById(decoded.id).select("-password");
// //   next();
// // };

// import jwt from "jsonwebtoken";
// import User from "../models/User.js";

// export const protect = async (req, res, next) => {
//   try {
//     let token;

//     // ✅ Read token from cookie
//     if (req.cookies.token) {
//       token = req.cookies.token;
//     }

//     if (!token) {
//       return res.status(401).json({ message: "Not authorized" });
//     }

//     const decoded = jwt.verify(token, process.env.JWT_SECRET);

//     req.user = await User.findById(decoded.id).select("-password");

//     next();
import jwt from "jsonwebtoken";
import User from "../models/User.js";

export const protect = async (req, res, next) => {
  try {
    let token;

    // ✅ 1. Check cookie first
    if (req.cookies.token) {
      token = req.cookies.token;
    }

    // ✅ 2. If not in cookie, check Authorization header
    else if (req.headers.authorization?.startsWith("Bearer")) {
      token = req.headers.authorization.split(" ")[1];
    }

    if (!token) {
      return res.status(401).json({ message: "Not authorized" });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    req.user = await User.findById(decoded.id).select("-password");

    next();
  } catch (error) {
    return res.status(401).json({ message: "Not authorized" });
  }
};

//   } catch (error) {
//     return res.status(401).json({ message: "Not authorized" });
//   }
// };
