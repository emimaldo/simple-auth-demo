# Security Node & React Demo

A simple demo application demonstrating **OAuth 2.0** authentication with **JWT** tokens.

## Tech Stack

- **Backend:** Node.js + Express  
- **Authentication:** JSON Web Tokens (JWT)  
- **Frontend:** React + Vite  

## Project Structure

```
backend/
├── package.json
├── .env          # JWT_SECRET, JWT_ISSUER, JWT_AUDIENCE
└── index.js      # Express server with /api/auth/login and /api/secure

frontend/
├── package.json
├── .env          # VITE_API_BASE_URL=http://localhost:5000
├── index.html
├── vite.config.js
└── src/
    ├── main.jsx
    ├── api/
    │   ├── index.js  # Axios baseURL & interceptor
    │   └── auth.js   # login() function
    └── components/
        ├── Login.jsx
        └── Home.jsx
    └── App.jsx
```

## Setup & Run

### Prerequisites

- Node.js v18+  
- npm  

### Backend

1. Navigate to the backend folder:
   ```bash
   cd backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file with:
   ```env
   JWT_SECRET=YourVeryLongSecretKey
   JWT_ISSUER=https://yourdomain.com
   JWT_AUDIENCE=https://yourdomain.com
   ```
4. Start the server:
   ```bash
   npm run dev
   ```
   The API will be available at `http://localhost:5000`.

### Frontend

1. Navigate to the frontend folder:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file with:
   ```env
   VITE_API_BASE_URL=http://localhost:5000
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```
   The app will run at `http://localhost:3000`.

## Usage

1. Open `http://localhost:3000/login` in your browser.  
2. Login with:
   - **Username:** `user`
   - **Password:** `password`
3. After successful login, you will be redirected to the secure home page.

---

Feel free to explore, modify, and extend this demo for your own projects!