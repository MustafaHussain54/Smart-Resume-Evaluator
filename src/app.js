const express = require("express");
const cookieParser = require("cookie-parser");
const app = express();

// Middleware to parse JSON requests
app.use(express.json());
app.use(cookieParser());
/* require all routes here* */
const authRouter = require("./routes/auth.routes");
// Use the authRouter for authentication routes
app.use("/api/auth", authRouter);
module.exports = app;