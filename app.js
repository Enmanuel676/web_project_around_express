const express = require('express');
const users = require('./routers/users');
const cards = require('./routers/cards');

const app = express();
const { PORT = 3000 } = process.env;

app.use('/users', users);
app.use('/cards', cards);

app.use((req, res) => {
  res.status(404).send({ message: 'Recurso solicitado no encontrado' });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
