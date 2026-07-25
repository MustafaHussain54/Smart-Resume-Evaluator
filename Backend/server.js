require("dotenv").config();
const app = require("./src/app");
const connectDB = require("./src/config/database");
const {resume,selfDescription,jobDescription} = require("./src/services/temp");
const generateInterviewReport = require("./src/services/ai.service")

connectDB(); // Connect to the database
 generateInterviewReport({ resume,
  selfDescription,
  jobDescription, })

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
