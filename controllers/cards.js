const card=require('../models/cards')

const getCards= (req, res) => {
  card.find({})
  .then(card=>{
    
    res.send({data: card});
  })
  .catch(err=>{
    
    res.status(500).send({ message: `Error ${err}` });
  })
}

const createCard = (req, res) => {
  const { name, link } = req.body;
  
  card.create({ name, link, owner: req.user._id }) 
  .then(newCard => {
    res.status(201).send({ data: newCard });
  })
  .catch(err => {
    res.status(500).send({ message: `Error ${err}` });
  });
}
const deleteCard= (req,res)=>{
  const {cardId}=req.params;
  card.findByIdAndDelete(cardId)
  .then(card=>{
    res.send({data: card});
  })
  .catch(err=>{
     
    res.status(500).send({ message: `Error ${err}` });
  })
}

module.exports= {
    getCards, 
    createCard,
    deleteCard
}