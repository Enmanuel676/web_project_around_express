const fs = require('fs');
const path = require('path');
const cardsRouter = require('express').Router();

const cardsPath = path.join(__dirname, '../data/cards.json');

function readCards(callback) {
  fs.readFile(cardsPath, 'utf8', (err, data) => {
    if (err) {
      callback(err);
      return;
    }

    callback(null, JSON.parse(data));
  });
}

cardsRouter.get('/', (req, res) => {
  readCards((err, cards) => {
    if (err) {
      res.status(500).send({ message: 'Error al leer las tarjetas' });
      return;
    }

    res.send(cards);
  });
});

cardsRouter.get('/:id', (req, res) => {
  readCards((err, cards) => {
    if (err) {
      res.status(500).send({ message: 'Error al leer las tarjetas' });
      return;
    }

    const card = cards.find((item) => item._id === req.params.id);

    if (!card) {
      res.status(404).send({ message: 'ID de tarjeta no encontrado' });
    } else {
      res.send(card);
    }
  });
});

module.exports = cardsRouter;
