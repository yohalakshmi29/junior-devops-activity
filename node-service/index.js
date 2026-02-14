const axios = require("axios");

const pythonUrl = process.env.PYTHON_URL || "http://python-service:5000";

axios.get(`${pythonUrl}/`)
  .then(res => console.log(res.data))
  .catch(err => console.error(err));
