const user = require('../models/users');

// GET /users — devuelve todos los usuarios
const getUsers = (req, res) => {
  user.find({})
    .then(users => {
      res.send({ data: users });
    })
    .catch(err => {
      res.status(500).send({ message: `Error predeterminado: ${err.message}` });
    });
};

// GET /users/:userId — devuelve un usuario por _id
const getuserById = (req, res) => {
  user.findById(req.params.userId)
    .orFail()
    .then(foundUser => {
      res.send({ data: foundUser });
    })
    .catch(err => {
      if (err.name === 'DocumentNotFoundError') {
        return res.status(404).send({ message: 'Usuario no encontrado' });
      }
      if (err.name === 'CastError') {
        return res.status(400).send({ message: 'ID de usuario inválido' });
      }
      res.status(500).send({ message: `Error predeterminado: ${err.message}` });
    });
};

// GET /users/me - obtiene el usuario actual
const getCurrentUser = (req, res) => {
  user.findById(req.user._id)
    .orFail()
    .then(currentUser => {
      res.send({ data: currentUser });
    })
    .catch(err => {
      if (err.name === 'DocumentNotFoundError') {
        return res.status(404).send({ message: 'Usuario no encontrado' });
      }
      res.status(500).send({ message: `Error predeterminado: ${err.message}` });
    });
};

// POST /users — crea un nuevo usuario
const createUser = (req, res) => {
  const { name, about, avatar } = req.body;
  user.create({ name, about, avatar })
    .then(newUser => {
      res.status(201).send({ data: newUser });
    })
    .catch(err => {
      if (err.name === 'ValidationError') {
        return res.status(400).send({ message: `Datos de usuario inválidos: ${err.message}` });
      }
      res.status(500).send({ message: `Error predeterminado: ${err.message}` });
    });
};

// PATCH /users/me — actualizar el perfil
const updateProfile = (req, res) => {
  const { name, about } = req.body;
  user.findByIdAndUpdate(
    req.user._id,
    { name, about },
    { new: true, runValidators: true }
  )
    .orFail()
    .then(updatedUser => {
      res.send({ data: updatedUser });
    })
    .catch(err => {
      if (err.name === 'ValidationError') {
        return res.status(400).send({ message: `Datos inválidos: ${err.message}` });
      }
      if (err.name === 'DocumentNotFoundError') {
        return res.status(404).send({ message: 'Usuario no encontrado' });
      }
      res.status(500).send({ message: `Error predeterminado: ${err.message}` });
    });
};

// PATCH /users/me/avatar — actualizar el avatar
const updateAvatar = (req, res) => {
  const { avatar } = req.body;
  user.findByIdAndUpdate(
    req.user._id,
    { avatar },
    { new: true, runValidators: true }
  )
    .orFail()
    .then(updatedUser => {
      res.send({ data: updatedUser });
    })
    .catch(err => {
      if (err.name === 'ValidationError') {
        return res.status(400).send({ message: `Enlace de avatar inválido: ${err.message}` });
      }
      if (err.name === 'DocumentNotFoundError') {
        return res.status(404).send({ message: 'Usuario no encontrado' });
      }
      res.status(500).send({ message: `Error predeterminado: ${err.message}` });
    });
};

// DELETE /users/:userId — elimina un usuario
const deleteUser = (req, res) => {
  user.findByIdAndDelete(req.params.userId)
    .orFail()
    .then(deletedUser => {
      res.send({ data: deletedUser });
    })
    .catch(err => {
      if (err.name === 'DocumentNotFoundError') {
        return res.status(404).send({ message: 'Usuario no encontrado para eliminar' });
      }
      if (err.name === 'CastError') {
        return res.status(400).send({ message: 'ID de usuario inválido' });
      }
      res.status(500).send({ message: `Error predeterminado: ${err.message}` });
    });
};

module.exports = {
  getUsers,
  getuserById,
  getCurrentUser,
  createUser,
  updateProfile,
  updateAvatar,
  deleteUser
};