const user=require('../models/users');

const getUsers= (req, res) => {
  
  user.find({})
  .then(user=>{
    
    res.send({data: user});
  })
  .catch(err=>{
    
    res.status(500).send({ message: `Error ${err}` });
  })
}

const getuserById= (req, res)=>{
  user.findById(req.params.userId)
  .then(user=>{
    
    res.send({data: user});
  })
  .catch(err=>{
    
    res.status(500).send({ message: `Error ${err}` });
  })
}
const createUser= (req,res)=>{
  const {name, about, avatar}=req.body
  user.create({name, about, avatar})
  .then(user=>{
    
    res.status(201).send({data: user});
  })
  .catch(err=>{
    
    res.status(500).send({ message: `Error ${err}` });
  })
}
const deleteUser= (req,res)=>{
  const {userId}=req.params
  user.findByIdAndDelete(userId)
  .then(user=>{
    
    res.send({data: user});
  })
  .catch(err=>{
    
    res.status(500).send({ message: `Error ${err}` });
  })
}

module.exports= {
    getUsers,
    getuserById,
    createUser,
    deleteUser
}