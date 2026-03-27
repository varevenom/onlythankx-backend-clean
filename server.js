const express = require("express");
const app = express();

app.use(express.json());

// allow requests from your local html file / browser
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  next();
});

const PORT = process.env.PORT || 3000;

let thanksMessages = [
  { id: 1, message: "Thank you for helping me!" },
  { id: 2, message: "Grateful for your support 🙏" }
];

app.get("/", (req, res) => {
  res.send("My backend is LIVE!");
});

app.get("/api/test", (req, res) => {
  res.json({ message: "API is working 🚀" });
});

app.get("/api/thanks", (req, res) => {
  res.json(thanksMessages);
});

app.post("/api/thanks", (req, res) => {
  const newMessage = {
    id: thanksMessages.length + 1,
    message: req.body.message
  };

  thanksMessages.push(newMessage);

  res.json(newMessage);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});