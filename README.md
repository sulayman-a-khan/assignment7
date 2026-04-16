# KeenKeeper 🌿

> Your personal shelf of meaningful connections.

KeenKeeper helps you stay intentional about the relationships that matter most. Track your friends, log interactions, and never let an important connection go cold.

---

## 🚀 Getting Started

```bash
npm install
npm run dev
```

Then open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 🛠 Technologies Used

| Technology | Purpose |
|---|---|
| **React 18** | UI framework |
| **Vite** | Lightning-fast dev server & bundler |
| **React Router v6** | Client-side routing |
| **Tailwind CSS** | Utility-first styling |
| **Recharts** | Pie chart on the Stats page |
| **Lucide React** | Icon library |

---

## ✨ Features

- **Friend Cards** — Browse all your friends in a clean grid with status badges (On-Track, Almost Due, Overdue)
- **Friend Detail Page** — View profile info, stats, and a Quick Check-in panel
- **Quick Check-in** — Log a Call, Text, or Video interaction with one tap
- **Timeline Page** — See all logged interactions in reverse-chronological order, filterable by type
- **Stats Page** — Interactive donut chart showing interaction breakdown by type; hover a segment to see the count
- **Session-based Data** — Interactions are stored in memory for the current session and reset on page reload — keeping the app clean and private
- **Dynamic Summary Cards** — Home page stats (Total, On Track, Need Attention, Overdue) computed live from your friends data
- **Fully Responsive** — Optimised for mobile, tablet, and desktop screens
- **Toast Notifications** — Instant feedback when an interaction is logged

---

## 📁 Project Structure

```
src/
├── assets/          # Icons and logo images
├── components/      # Reusable UI components (Navbar, Footer, FriendCard, Toast, LoadingSpinner)
├── data/
│   ├── friends.js   # Friend profiles data
│   └── timelineStore.js  # In-memory session store for interactions
└── pages/
    ├── Home.jsx         # Friends grid + summary cards
    ├── FriendDetails.jsx # Individual friend profile & check-in
    ├── Timeline.jsx      # Chronological interaction log
    ├── Stats.jsx         # Analytics donut chart
    └── NotFound.jsx      # 404 page
```

---

## 📸 Pages Overview

| Page | Path | Description |
|---|---|---|
| Home | `/` | Friends grid with summary stats |
| Timeline | `/timeline` | Logged interactions feed |
| Stats | `/stats` | Interaction analytics chart |
| Friend Detail | `/friend/:id` | Profile + Quick Check-in |

---

© 2026 KeenKeeper. All rights reserved.
