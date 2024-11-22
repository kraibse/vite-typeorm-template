# Vite-TypeORM-Template

This repository contains a full-stack application template with a frontend built using Vue 3, Vite, and TypeScript, and a backend using Express and TypeORM with PostgreSQL database access.

## Table of Contents

- [Vite-TypeORM-Template](#vite-typeorm-template)
  - [Table of Contents](#table-of-contents)
  - [Project Structure](#project-structure)
  - [Frontend](#frontend)
    - [Features](#features)
    - [Setup](#setup)
  - [Backend](#backend)
    - [Features](#features-1)
    - [Configuration](#configuration)
    - [API Endpoints](#api-endpoints)
  - [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
  - [Scripts](#scripts)
    - [Backend](#backend-1)
    - [Frontend](#frontend-1)
  - [License](#license)

## Project Structure

```
vite-typeorm-template/
├── express-backend/
│   ├── src/
│   │   ├── entities/
│   │   │   └── user.ts
│   │   └── main.ts
│   ├── package.json
│   └── ormconfig.json
└── vite-frontend/
    ├── src/
    ├── package.json
    └── README.md
```

## Frontend

The frontend is developed using Vue 3, Vite, and TypeScript. It provides a modern setup for building reactive user interfaces.

### Features

- Vue 3 with Single File Components (SFCs)
- TypeScript for static typing
- Vite for fast development and build

### Setup

Refer to the [Vue Docs TypeScript Guide](https://vuejs.org/guide/typescript/overview.html#project-setup) for recommended project setup and IDE support.

## Backend

The backend is a simple Express API that connects to a PostgreSQL database using TypeORM.

### Features

- Express for handling HTTP requests
- TypeORM for database interaction
- PostgreSQL as the database

### Configuration

The database connection is configured in `ormconfig.json`:

```json
{
    "type": "postgres",
    "host": "localhost",
    "port": 5432,
    "username": "postgres",
    "password": "postgres",
    "database": "dev",
    "entities": ["src/entities/*.ts"],
    "synchronize": true
}
```

### API Endpoints

- `GET /users`: Retrieve all users
- `POST /users`: Add a new user

## Getting Started

### Prerequisites

- Node.js and npm
- PostgreSQL

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/yourusername/vite-typeorm-template.git
   cd vite-typeorm-template
   ```

2. **Install dependencies for both frontend and backend:**

   ```bash
   cd express-backend
   npm install
   cd ../vite-frontend
   npm install
   ```

3. **Set up the database:**

   Ensure PostgreSQL is running and a database named `dev` is created.

4. **Run the backend:**

   ```bash
   cd express-backend
   pnpx tsx src/main.ts
   ```

5. **Run the frontend:**

   ```bash
   cd vite-frontend
   npm run dev
   ```

## Scripts

### Backend

- `npm start`: Start the Express server
- `npm test`: Run tests (not specified)

### Frontend

- `npm run dev`: Start the Vite development server
- `npm run build`: Build the frontend for production

## License

This project is licensed under the MIT License.
