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

The project has been restructured to follow the MVC architecture patterns:

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

Returns the complete list of users.

```http
GET /users/:id
```

Returns a user by `_id`.

If the user does not exist, the server responds with status `404`:

```json
{
  "message": "User ID not found"
}
```

### Cards

- Create separate controllers to keep the routers cleaner.
