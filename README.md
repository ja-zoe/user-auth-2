# User Auth 2

A deliberately crude project I built to learn how web authentication actually works, wiring up the moving pieces by hand instead of reaching for an auth library.

It implements:

- Signup and login with bcrypt-hashed passwords (MongoDB via Mongoose)
- Short-lived JWT access tokens with a refresh token in an httpOnly cookie
- A `/auth/refresh` endpoint that rotates access tokens silently
- Role-based authorization (regular users vs an admin-only page)
- Protected routes on the frontend via an auth context and a `RequireAuth` wrapper

Not production auth. No rate limiting, no email verification, no token revocation list. The point was to understand the flow.

## Structure

- **backend/** - Express + TypeScript API (`/auth` for refresh/logout, `/users` for signup/login/user management), JWT verification middleware, role config
- **frontend/** - React + TypeScript + Vite + Tailwind (login, signup, home, account, admin, unauthorized pages)

## Running it

```bash
# backend (expects a MongoDB connection string in .env)
cd backend && npm install && npm run dev

# frontend
cd frontend && npm install && npm run dev
```
