# Web Project Around Express

Small backend project built with Node.js and Express. This API serves user and card data from local JSON files using separate routes and basic error handling.

The project is currently in an early stage and will continue growing with more features soon.

## Technologies Used

- Node.js

- Express

- JavaScript CommonJS

- `fs` module to read JSON files

- `path` module to safely build file paths

- JSON as a temporary data source

- ESLint with Airbnb Base configuration

- Nodemon for development

## Current Features

- Starts an Express server on `localhost:3000`.

- Exposes routes to retrieve users.

- Exposes routes to retrieve cards.

- Reads data from files inside the `data` folder.

- Returns `404` errors when a resource is not found.

- Includes a final handler for nonexistent routes.

## Project Structure

```txt
.
├── app.js
├── data
│   ├── cards.json
│   └── users.json
├── routers
│   ├── cards.js
│   └── users.js
├── package.json
└── README.md
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
