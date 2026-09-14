# Riverside Community Hub

A community hub web app built with React (client) and Express (server), using Supabase for auth and the database.

## Tech Stack

- Frontend: React, TypeScript, Vite, Tailwind CSS
- Backend: Node.js, Express, TypeScript
- Auth & DB: Supabase

## Project Structure

```
client/   - React frontend
server/   - Express API
```

## Setup

### 1. Client

```
cd client
npm install
```

Copy `.env.example` to `.env` and fill in your Supabase project URL and anon key:

```
VITE_API_URL=http://localhost:5000/api
VITE_SUPABASE_URL=your-project-url
VITE_SUPABASE_ANON_KEY=your-anon-key
```

Run the dev server:

```
npm run dev
```

Opens at http://localhost:5173

### 2. Server

```
cd server
npm install
```

Copy `.env.example` to `.env` and fill in your Supabase project URL and service role key:

```
PORT=5000
SUPABASE_URL=your-project-url
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
```

Run the dev server:

```
npm run dev
```

Runs at http://localhost:5000

## Features so far

- Supabase auth (sign up / log in / log out) with React context
- Auth-gated dashboard showing upcoming community events
- Express API with a health check route and an events route
