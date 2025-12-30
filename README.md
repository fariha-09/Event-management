# 📅 Event Horizon | Full-Stack Event Booking System

Event Horizon is a professional event management tool built on the MERN stack. It bridges the gap between event organizers and attendees with a seamless, role-based experience.


## 🏗️ System Architecture
This project is built using a decoupled architecture:
* **Frontend (This Repo):** Built with React.js and Tailwind CSS. Manages the UI, booking flows, and protected routes.
* **🔗 [View Backend Repository](https://github.com/fariha-09/Event-node.git):** Handles the RESTful API, MongoDB database, and JWT security logic.

## ✨ Key Features
* **🔐 Role-Based Access Control (RBAC):** Distinct workflows for Admins (Organizers) and Users (Attendees).
* **🎟️ Booking System:** Real-time event booking with status tracking (Pending, Confirmed, Cancelled).
* **📅 Scheduling Dashboard:** Interactive UI for managing event dates, descriptions, and capacity.
* **🛡️ Secure Auth:** Protected API endpoints and frontend routes using JSON Web Tokens (JWT).

## 🛠️ Tech Stack
* **Frontend:** React (Vite/CRA), Tailwind CSS, Axios, React Router.
* **Backend:** Node.js, Express.js.
* **Database:** MongoDB & Mongoose.
* **Auth:** JWT (JSON Web Tokens).

## 🚀 Installation
1. Clone the repo.
2. Install dependencies: `npm install`.
3. Create `.env` and add `VITE_API_URL`.
4. Run: `npm run dev` (or `npm start`).
