const express = require( 'express');
const users = require('./routers/users');
const cards = require('./routers/cards');
const mongoose= require('mongoose');
mongoose.connect('mongodb://localhost:27017/aroundb',

);
const app = express();
const { PORT = 3000 } = process.env;
app.use(express.json())
app.use((req, res, next)=>{
  req.user={_id:'66a593c5864db5f2f25be5e14'}
  next()
})
app.use('/users', users);
app.use('/cards', cards);


app.use((req, res) => {
  res.status(404).send({ message: 'Recurso solicitado no encontrado' });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
})
