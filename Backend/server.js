require("dotenv").config();
const app = require("./src/app");
const connectDB = require("./src/config/database");

connectDB(); // Connect to the database


app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
