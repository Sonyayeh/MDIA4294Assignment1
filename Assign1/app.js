const express = require("express");
const bodyParser = require("body-parser");
const bookRoutes = require("./routes/books");
const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.json());
app.use(express.static("public")); // Serves images from the public folder

// Routes
app.use("/books", bookRoutes); // Make sure the /books route is linked to the correct file

// Root route (Home)
app.get("/", (req, res) => {
  res.send("Welcome to the Books API! 📚✨");
});

// Error Handling for non-existing routes
app.use((req, res) => {
  res.status(404).json({ error: "Endpoint not found" });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}/books`);
});
