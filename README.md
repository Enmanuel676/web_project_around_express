# Web Project Around Express

Proyecto backend pequeno construido con Node.js y Express. Esta API sirve datos de usuarios y tarjetas desde archivos JSON locales, usando rutas separadas y manejo basico de errores.

El proyecto esta en una etapa inicial y pronto seguira creciendo con mas funcionalidades.

## Tecnologias utilizadas

- Node.js
- Express
- JavaScript CommonJS
- Modulo `fs` para leer archivos JSON
- Modulo `path` para construir rutas de archivos de forma segura
- JSON como fuente temporal de datos
- ESLint con configuracion Airbnb Base
- Nodemon para desarrollo

## Que hace actualmente

- Levanta un servidor Express en `localhost:3000`.
- Expone rutas para consultar usuarios.
- Expone rutas para consultar tarjetas.
- Lee los datos desde archivos dentro de la carpeta `data`.
- Devuelve errores `404` cuando no encuentra un recurso.
- Tiene un manejador final para direcciones inexistentes.

## Estructura del proyecto

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

## Rutas disponibles

### Usuarios

```http
GET /users
```

Devuelve la lista completa de usuarios.

```http
GET /users/:id
```

Devuelve un usuario por su `_id`.

Si el usuario no existe, responde con estado `404`:

```json
{
  "message": "ID de usuario no encontrado"
}
```

### Tarjetas

```http
GET /cards
```

Devuelve la lista completa de tarjetas.

```http
GET /cards/:id
```

Devuelve una tarjeta por su `_id`.

Si la tarjeta no existe, responde con estado `404`.

### Ruta inexistente

Si se solicita una direccion que no existe, la API responde con estado `404`:

```json
{
  "message": "Recurso solicitado no encontrado"
}
```

## Como ejecutar el proyecto

Instalar dependencias:

```bash
npm install
```

Iniciar el servidor:

```bash
npm start
```

El servidor se ejecuta por defecto en:

```txt
http://localhost:3000
```

## Lint

Para revisar el estilo del codigo:

```bash
npm run lint
```

## Proximos pasos

- Agregar mas endpoints.
- Mejorar el manejo de errores.
- Agregar validaciones.
- Conectar una base de datos real.
- Crear controladores separados para mantener los routers mas limpios.
