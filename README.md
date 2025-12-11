# Account Manager (React + Vite)

A simple, professional single-page app for the React internship practical. Users can register, log in, and manage profile details—no backend required.

## Features
- Registration form with validation (name, email, password length).
- Login form with sample credentials shown in the UI.
- Profile editing: name, email, phone, role, company, status, bio.
- Profile completion indicator.
- All state handled client-side.

## Sections (single page)
- Hero: intro + buttons to jump to Register or Login.
- Registration card: create an account.
- Login card: sign in with registered or sample credentials.
- Profile card: update account details and status.

## Getting Started
```bash
npm install
npm run dev
# open the shown localhost URL (typically http://localhost:5173)
```

## Usage Flow
1) Register a new account (name, email, password required).
2) Log in using the new credentials (or the sample ones displayed).
3) Update profile fields and save.

## Sample Credentials
- Email: avery@northwind.studio
- Password: Design#24

## Tech Stack
- React 19, Vite
- Plain CSS (no external UI library)

## Structure
- `src/App.jsx` – app state and layout
- `src/components/` – Hero, RegistrationCard, LoginCard, ProfileCard, CardShell
- `src/App.css` – component styles
- `src/index.css` – global styles

## Notes
- Everything runs locally; data is in-memory only.
- Keep code simple and readable per the practical guidelines.
