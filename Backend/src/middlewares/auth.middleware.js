const jwt = require("jsonwebtoken");
const User = require("../models/user.model");
const blacklistModel = require("../models/blacklist.model");
 async function authUser(req, res, next) {
  const token = req.cookies.token; // Get the token from cookies
  if (!token) {
    return res.status(401).json({ message: "Unauthorized: No token provided" });
  }
  const isBlacklisted = await blacklistModel.findOne({ token });
  if (isBlacklisted) {
    return res.status(401).json({ message: "Unauthorized: Token is invalid" });
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET)
    req.user = decoded; // Attach the decoded user information to the request object
    next(); // Proceed to the next middleware or route handler
  } catch (err) {
    return res.status(401).json({ message: "Unauthorized: Invalid token" });
  }
}
module.exports = {authUser}
