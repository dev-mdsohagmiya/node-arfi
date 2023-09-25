const express = require("express");
const app = express();
const path = require("path");
const port = 3000; // You can change this port number to your preferred value
app.use(
  express.static(path.join(__dirname, "../React_Frontend_Afrilangues/dist"))
);

// Define a route
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
