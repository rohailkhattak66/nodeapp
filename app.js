// app.js
const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello, Node.js with Express! This is v5 to test polling and if it works with a stopped docker');
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
