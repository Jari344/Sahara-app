# Saath — Hyperlocal Elderly-Help Platform (Prototype)

A demo React app connecting elderly people and families in a Betul, Madhya Pradesh
neighborhood with verified local helpers (students, neighbors, retirees, part-time
workers) for small everyday tasks — visits, groceries, check-in calls, and more.

This is a frontend-only prototype. All data is mock/demo data, and auth + persistence
are simulated with `localStorage` so the app is fully usable without a backend.
The project is structured so a real backend (Supabase, Firebase, or a custom Node.js
API) can be dropped in later — start with `src/context/AppContext.jsx`, which is the
single place all data reads/writes go through.

## Stack

- React 18 + Vite
- React Router v6
- Tailwind CSS
- lucide-react icons
- localStorage for demo persistence

## Getting started

```bash
npm install
npm run dev
```

Then open the printed local URL. On first login/signup, choose a role
(I need help / I want to help / Family member / Local coordinator) — this is a demo
login with no password or OTP.

## Try each role

- **I need help (elderly/family):** post a request from the dashboard, watch its
  status move through the timeline, and rate a completed request.
- **I want to help (helper):** view nearby open requests, accept one, and move it
  through in-progress → completed.
- **Family member:** log in as "Family member" to see `/family`, a read-only view
  of a relative's current and past requests.
- **Local coordinator (admin):** log in as "Local coordinator (admin)" to reach
  `/admin` — approve/reject pending helper verifications, review active requests,
  and view safety reports.

## Project structure

```
src/
  components/   Reusable UI building blocks (Card, RequestCard, HelperCard, Modal, ...)
  pages/        One file per route (see App.jsx for the full route list)
  context/      AppContext.jsx — all app state + localStorage persistence
  data/         mockData.js — fictional Betul demo data (people, requests, stats)
```

## Notes on real data & privacy

- Exact home addresses are never shown — only the neighborhood (e.g. "Kothi Bazaar").
- The verification UI never displays Aadhaar numbers or ID documents, by design.
- All names, requests, and stats are fictional placeholders for the demo.
