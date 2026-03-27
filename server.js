const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("My backend is LIVE!");
});

app.get("/api/test", (req, res) => {
  res.json({ message: "API is working 🚀" });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});