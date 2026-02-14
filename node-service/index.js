const express = require("express");
const axios = require("axios");

const app = express();
const PORT = 3000;

const PYTHON_SERVICE_URL = process.env.PYTHON_SERVICE_URL || "http://localhost:5000";

app.get("/", async (req, res) => {
  try {
    const response = await axios.get(PYTHON_SERVICE_URL);
    res.json({
      message: "Node service is running!",
      pythonResponse: response.data
    });
  } catch (error) {
    res.status(500).json({ error: "Cannot connect to Python service" });
  }
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Node service running on port ${PORT}`);
});
