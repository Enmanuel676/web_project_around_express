const card = require('../models/cards');

// GET /cards — devuelve todas las tarjetas
const getCards = (req, res) => {
  card.find({})
    .then(cards => {
      res.send({ data: cards });
    })
    .catch(err => {
      res.status(500).send({ message: `Error predeterminado: ${err.message}` });
    });
};

// POST /cards — crea una nueva tarjeta
const createCard = (req, res) => {
  const { name, link } = req.body;
  card.create({ name, link, owner: req.user._id })
    .then(newCard => {
      res.status(201).send({ data: newCard });
    })
    .catch(err => {
      if (err.name === 'ValidationError') {
        return res.status(400).send({ message: `Datos de tarjeta inválidos: ${err.message}` });
      }
      res.status(500).send({ message: `Error predeterminado: ${err.message}` });
    });
};

// DELETE /cards/:cardId — elimina una tarjeta por _id
const deleteCard = (req, res) => {
  const { cardId } = req.params;
  card.findByIdAndDelete(cardId)
    .orFail()
    .then(deletedCard => {
      res.send({ data: deletedCard });
    })
    .catch(err => {
      if (err.name === 'DocumentNotFoundError') {
        return res.status(404).send({ message: 'Tarjeta no encontrada' });
      }
      if (err.name === 'CastError') {
        return res.status(400).send({ message: 'ID de tarjeta inválido' });
      }
      res.status(500).send({ message: `Error predeterminado: ${err.message}` });
    });
};

// PUT /cards/:cardId/likes — dar like a una tarjeta
const likeCard = (req, res) => {
  card.findByIdAndUpdate(
    req.params.cardId,
    { $addToSet: { likes: req.user._id } }, // agrega _id al array si aún no está ahí
    { new: true }
  )
    .orFail()
    .then(updatedCard => {
      res.send({ data: updatedCard });
    })
    .catch(err => {
      if (err.name === 'DocumentNotFoundError') {
        return res.status(404).send({ message: 'Tarjeta no encontrada para dar like' });
      }
      if (err.name === 'CastError') {
        return res.status(400).send({ message: 'ID de tarjeta inválido' });
      }
      res.status(500).send({ message: `Error predeterminado: ${err.message}` });
    });
};

// DELETE /cards/:cardId/likes — dar unlike a una tarjeta
const dislikeCard = (req, res) => {
  card.findByIdAndUpdate(
    req.params.cardId,
    { $pull: { likes: req.user._id } }, // elimina _id del array
    { new: true }
  )
    .orFail()
    .then(updatedCard => {
      res.send({ data: updatedCard });
    })
    .catch(err => {
      if (err.name === 'DocumentNotFoundError') {
        return res.status(404).send({ message: 'Tarjeta no encontrada para quitar like' });
      }
      if (err.name === 'CastError') {
        return res.status(400).send({ message: 'ID de tarjeta inválido' });
      }
      res.status(500).send({ message: `Error predeterminado: ${err.message}` });
    });
};

module.exports = {
  getCards,
  createCard,
  deleteCard,
  likeCard,
  dislikeCard
};