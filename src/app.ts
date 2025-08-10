import express from "express";

const app = express();
app.use(express.json()); // Middleware to parse JSON bodies

// Define the main routes for the application

app.listen(3000, () => {
  console.log("Server is running on https://http://localhost:3000");
});
