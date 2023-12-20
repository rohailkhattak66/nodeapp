// app.js
const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello, Node.js with Express!');
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
