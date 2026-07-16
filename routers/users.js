const fs = require('fs');
const {getUsers,
    getuserById,
    createUser,
    deleteUser}=require('../controllers/users')

const usersRouter = require('express').Router();






usersRouter.get('/', getUsers);

usersRouter.get('/:userId', getuserById)

usersRouter.post('/',createUser)

usersRouter.delete('/:userId', deleteUser)



module.exports = usersRouter;
