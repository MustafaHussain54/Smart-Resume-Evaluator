const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors")
const app = express();


// Middleware to parse JSON requests
app.use(express.json());
app.use(cookieParser());

app.use(cors({
    // origin:"http://localhost:5173",
    origin:"https://smart-resume-evaluator-3ugi.vercel.app",
    credentials:true
}))

/* require all routes here* */
const authRouter = require("./routes/auth.routes");
// Use the authRouter for authentication routes
const interviewRouter = require("./routes/interview.route")

app.use("/api/auth", authRouter);
app.use("/api/interview" ,interviewRouter)

module.exports = app;