const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

// Root route
app.get("/", (req, res) => {
  res.send("My backend is LIVE!");
});

// Test route
app.get("/api/test", (req, res) => {
  res.json({ message: "API is working 🚀" });
});

// Thanks route (NEW FEATURE)
app.get("/api/thanks", (req, res) => {
  res.json([
    { id: 1, message: "Thank you for helping me!" },
    { id: 2, message: "Grateful for your support 🙏" }
  ]);
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});