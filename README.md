# Jugueteria Cósmica (Cosmic Library)

Bootcamp final project built with Express, Handlebars, and MongoDB.

## Features

- Express server with Handlebars views
- MongoDB/Mongoose data layer
- Image uploads via Cloudinary
- RESTful routes for products and contact forms

## Project Structure

```
.
├── app.js
├── config
│   └── db.js
├── controllers
├── models
├── public
├── routes
├── sass
├── utils
└── views
```

## Requirements

- Node.js 18+
- MongoDB (local or hosted)

## Environment Variables

Copy `.env.example` to `.env` and fill in the values:

```
PORT=5000
DB_URI=mongodb+srv://<user>:<password>@<cluster>.mongodb.net/<database>?retryWrites=true&w=majority
CLOUDINARY_CLOUD_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=
```

## Getting Started

```bash
npm install
npm run dev
```

Visit `http://localhost:5000`.

## Database (Free Tier)

You can use **MongoDB Atlas** for a free hosted database:

1. Create an account at https://www.mongodb.com/atlas/database.
2. Create a free cluster and database user.
3. Add your IP to the allow list.
4. Copy the connection string into `DB_URI` in your `.env` file.

## Production Notes

- Set `NODE_ENV=production` in your hosting environment.
- Ensure `DB_URI` and Cloudinary credentials are set as environment variables.
- Use a process manager (Render, Railway, or similar) to keep the Node process alive.
- Add HTTPS at the platform level (Render/Railway/Heroku all provide this).

## Scripts

- `npm run dev`: Start with nodemon.
- `npm start`: Start the server.
