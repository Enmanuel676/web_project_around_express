

const {getCards, 
    createCard,
    deleteCard}=require('../controllers/cards')

const cardsRouter = require('express').Router();



cardsRouter.get('/',getCards );

cardsRouter.post('/', createCard)

cardsRouter.delete('/:cardId',deleteCard)

module.exports = cardsRouter;