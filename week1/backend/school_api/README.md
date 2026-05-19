# Server — Week 1 Backend

## Installation

```bash
cd server
npm install
```

## Environment Variables

Create a `.env` file in the server folder:

```
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_password
DB_NAME=your_database_name
PORT=3000
```

## Running the Server

```bash
npm run dev
```

The server will start at `http://localhost:3000`

## Tech Stack

- Node.js
- Express.js
- MySQL
- dotenv

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /api/items | Get all items |
| GET | /api/items/:id | Get one item |
| POST | /api/items | Create a new item |
| PUT | /api/items/:id | Update an item |
| DELETE | /api/items/:id | Delete an item |
