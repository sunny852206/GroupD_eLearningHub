const express = require('express');

const app = express();

app.get('/', (req, res) =>
  res.send('Riley is a poopoo stupid head, Sunny also is a poopoo, a big one')
);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
