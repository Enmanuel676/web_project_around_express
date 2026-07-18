const usersRouter = require('express').Router();
const {
  getUsers,
  getuserById,
  getCurrentUser,
  createUser,
  updateProfile,
  updateAvatar,
  deleteUser
} = require('../controllers/users');

// Las rutas más específicas (como /me) deben ir ANTES de las parametrizadas (como /:userId)
usersRouter.get('/', getUsers);
usersRouter.get('/me', getCurrentUser);
usersRouter.get('/:userId', getuserById);
usersRouter.post('/', createUser);
usersRouter.patch('/me', updateProfile);
usersRouter.patch('/me/avatar', updateAvatar);
usersRouter.delete('/:userId', deleteUser);

module.exports = usersRouter;
