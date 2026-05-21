const fs = require('fs');
const path = require('path');
const usersRouter = require('express').Router();

const usersPath = path.join(__dirname, '../data/users.json');

function readUsers(callback) {
  fs.readFile(usersPath, 'utf8', (err, data) => {
    if (err) {
      callback(err);
      return;
    }

    callback(null, JSON.parse(data));
  });
}

usersRouter.get('/', (req, res) => {
  readUsers((err, users) => {
    if (err) {
      res.status(500).send({ message: 'Error al leer los usuarios' });
      return;
    }

    res.send(users);
  });
});

usersRouter.get('/:id', (req, res) => {
  readUsers((err, users) => {
    if (err) {
      res.status(500).send({ message: 'Error al leer los usuarios' });
      return;
    }

    const user = users.find((item) => item._id === req.params.id);

    if (!user) {
      res.status(404).send({ message: 'ID de usuario no encontrado' });
    } else {
      res.send(user);
    }
  });
});

module.exports = usersRouter;
