

# Notes App

This repository contains a full stack Notes application built as part of the **Full Stack Open** course.

The application consists of a React frontend, a Node.js/Express backend, a MongoDB database, user authentication, routing, and end-to-end tests with Playwright.

## Project overview

The project is split into three main parts:

```text
fullstackopen-test/
├── frontend/
├── backend/
├── tests/
├── playwright.config.js
├── package.json
└── README.md
```

- `frontend` — React frontend built with Vite
- `backend` — Express backend with MongoDB and Mongoose
- `tests` — Playwright end-to-end tests

## Technologies used

- JavaScript
- React
- Vite
- React Router
- Material UI
- Axios
- Node.js
- Express
- MongoDB
- Mongoose
- bcrypt
- JSON Web Tokens
- Vitest
- React Testing Library
- Playwright

## Features

### Frontend

The frontend is a React application for viewing, creating, updating, and deleting notes.

Main features:

- Home page
- Notes list
- Single note view
- Create new notes
- Mark notes as important or not important
- Delete notes
- Login form
- Logout button
- Navigation with React Router
- Material UI navigation bar and form elements
- Notifications after creating notes
- Footer component

Main frontend routes:

- `/` — home page
- `/notes` — list of notes
- `/notes/:id` — single note view
- `/create` — create a new note
- `/login` — login page

### Backend

The backend provides a REST API for notes, users, and login.

Main features:

- Get all notes
- Get a single note by ID
- Create notes
- Update notes
- Delete notes
- Create users
- Login users
- Hash passwords with bcrypt
- Authenticate requests with JSON Web Tokens
- Connect notes to users
- Populate users inside notes
- Populate notes inside users
- Separate test database support
- Testing reset route in test mode

Main API endpoints:

```text
GET    /api/notes
GET    /api/notes/:id
POST   /api/notes
PUT    /api/notes/:id
DELETE /api/notes/:id
GET    /api/users
POST   /api/users
POST   /api/login
POST   /api/testing/reset   # only in test mode
```

## Database models

### Note

A note contains:

- `content`
- `important`
- `user`

The `content` field is required and has a minimum length.

### User

A user contains:

- `username`
- `name`
- `passwordHash`
- `notes`

The password hash is not returned in JSON responses.

## Running the application locally

### 1. Install root dependencies

From the repository root:

```bash
npm install
```

### 2. Configure backend environment variables

Create a `.env` file inside the `backend` folder:

```env
MONGODB_URI=your_mongodb_connection_string
TEST_MONGODB_URI=your_test_mongodb_connection_string
SECRET=your_jwt_secret
PORT=3001
```

The `.env` file should not be committed to GitHub.

### 3. Start the backend

Open a terminal and run:

```bash
cd backend
npm install
npm run dev
```

The backend should run on port `3001`.

### 4. Start the frontend

Open another terminal and run:

```bash
cd frontend
npm install
npm run dev
```

The frontend runs with Vite, usually on:

```text
http://localhost:5173
```

The frontend uses Vite proxy configuration to send `/api` requests to the backend at:

```text
http://localhost:3001
```

## Authentication

The application supports user login with JSON Web Tokens.

Login flow:

1. User enters username and password.
2. Frontend sends the credentials to `/api/login`.
3. Backend verifies the password with bcrypt.
4. Backend returns a token.
5. Frontend uses the token for authenticated requests.

Creating new notes requires a valid token.

## Testing

### Frontend tests

The frontend includes testing dependencies for Vitest and React Testing Library.

Run frontend tests:

```bash
cd frontend
npm test
```

### Backend tests

The backend has a test script that runs the backend in test mode.

Run backend tests:

```bash
cd backend
npm test
```

### End-to-end tests

Playwright tests are located in the root-level `tests` folder.

The E2E tests cover flows such as:

- Opening the front page
- Logging in
- Failed login
- Creating notes
- Changing note importance

To run the E2E tests, start the backend in test mode, start the frontend, and then run Playwright from the repository root.

Terminal 1:

```bash
cd backend
npm run start:test
```

Terminal 2:

```bash
cd frontend
npm run dev
```

Terminal 3, from the repository root:

```bash
npm test
```

Playwright uses this base URL:

```text
http://localhost:5173
```

## Useful commands

### Frontend

```bash
cd frontend
npm install
npm run dev
npm test
npm run build
```

### Backend

```bash
cd backend
npm install
npm run dev
npm test
npm run start:test
```

### End-to-end tests

```bash
npm install
npm test
npm run test:report
```

## Notes for development

This is an educational project built while learning full stack development.

Some features are implemented step by step as part of the Full Stack Open course. The project demonstrates how a frontend and backend communicate through a REST API, how authentication works with tokens, and how full user flows can be tested with Playwright.

## Git ignore recommendations

Generated files, local dependencies, and secrets should not be committed.

Recommended ignored files and folders:

```text
node_modules/
dist/
coverage/
playwright-report/
test-results/
.env
```

## Course

Full Stack Open is offered by the University of Helsinki.

Course website:

https://fullstackopen.com/en/

## Repository

https://github.com/FeFe488/fullstackopen-test

## Author

Helge Schulz

