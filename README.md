# Web Project Around Express (RESTful API)

Backend project built with Node.js and Express, connected to a MongoDB database. This RESTful API manages user and card data using Mongoose schemas, controllers, and structured routes under the MVC pattern.

## Technologies Used

- **Node.js**: JavaScript runtime environment.
- **Express**: Fast, unopinionated, minimalist web framework.
- **MongoDB**: NoSQL database for document-oriented data storage.
- **Mongoose**: Elegant MongoDB object modeling for Node.js.
- **ESLint**: Linter tool configured with Airbnb Base.
- **Nodemon**: Development tool that restarts the server on code changes.

## Current Features

- Starts an Express server on `localhost:3000`.
- Connects to a MongoDB database named `aroundb`.
- Uses schemas and models to validate users and cards structure.
- Validates URLs (avatar and card links) using custom regex validators in Mongoose.
- Uses temporary middleware in `app.js` to simulate user authentication by injecting a hardcoded user object (`req.user`) into all incoming requests.
- Returns proper HTTP status codes (e.g., `200 OK`, `201 Created`, `400 Bad Request`, `404 Not Found`, `500 Internal Server Error`).

## Project Structure

<<<<<<< HEAD
The project has been restructured to follow the MVC architecture patterns:
=======
The project follows the MVC architecture patterns:
>>>>>>> 88a475e (Develop Mongoose Fase 1-2(Complete))

```txt
.
├── controllers/          # Database query logic
│   ├── cards.js
│   └── users.js
├── models/               # Mongoose Schemas and Models
│   ├── cards.js
│   └── users.js
├── routers/              # API Endpoint definitions
│   ├── cards.js
│   └── users.js
├── app.js                # Server entry point and database connection
├── package.json
└── README.md
```

## Available Routes

### Users

- **`GET /users`**
  Returns the complete list of users from the database.
<<<<<<< HEAD

- **`GET /users/:userId`**
  Returns a single user by their `_id`.

- **`POST /users`**
  Creates a new user. The request body must be a JSON object containing:
  ```json
  {
    "name": "Jacques Cousteau",
    "about": "Explorer",
    "avatar": "https://code.s3.yandex.net/web-code/avatar.jpg"
  }
  ```

- **`DELETE /users/:userId`**
  Deletes a user by their `_id`.

---

### Cards

- **`GET /cards`**
  Returns all cards from the database.

- **`POST /cards`**
  Creates a new card. The author (`owner`) is automatically assigned using the authenticated user's ID (`req.user._id`). The request body must contain:
  ```json
  {
    "name": "Valle de la Muerte",
    "link": "https://code.s3.yandex.net/web-code/valle-de-la-muerte.jpg"
  }
  ```

- **`DELETE /cards/:cardId`**
  Deletes a card by its `_id`.
```

## Available Routes

### Users

```http
GET /users
```
=======
>>>>>>> 88a475e (Develop Mongoose Fase 1-2(Complete))

- **`GET /users/me`**
  Returns the current logged-in user's information using `req.user._id`.

- **`GET /users/:userId`**
  Returns a single user by their `_id`.

- **`POST /users`**
  Creates a new user. The request body must be a JSON object containing:
  ```json
  {
    "name": "Jacques Cousteau",
    "about": "Explorer",
    "avatar": "https://code.s3.yandex.net/web-code/avatar.jpg"
  }
  ```

- **`PATCH /users/me`**
  Updates the profile name and biography of the logged-in user. The request body must contain:
  ```json
  {
    "name": "New Name",
    "about": "New Bio"
  }
  ```

- **`PATCH /users/me/avatar`**
  Updates the avatar URL of the logged-in user. The request body must contain:
  ```json
  {
    "avatar": "https://url-de-la-imagen.jpg"
  }
  ```

- **`DELETE /users/:userId`**
  Deletes a user by their `_id`.

---

### Cards

- **`GET /cards`**
  Returns all cards from the database.

- **`POST /cards`**
  Creates a new card. The author (`owner`) is automatically assigned using the authenticated user's ID (`req.user._id`). The request body must contain:
  ```json
  {
    "name": "Valle de la Muerte",
    "link": "https://code.s3.yandex.net/web-code/valle-de-la-muerte.jpg"
  }
  ```

- **`DELETE /cards/:cardId`**
  Deletes a card by its `_id`.

- **`PUT /cards/:cardId/likes`**
  Likes a card by adding the user's `_id` to the card's `likes` array using the MongoDB `$addToSet` operator (maintaining unique likes).

- **`DELETE /cards/:cardId/likes`**
  Dislikes a card by removing the user's `_id` from the card's `likes` array using the MongoDB `$pull` operator.
