# 📝 To-Do List Full Stack Application

![Status](https://img.shields.io/badge/status-production-brightgreen)
![Tech](https://img.shields.io/badge/stack-React%20%7C%20Node%20%7C%20Prisma-blue)
![License](https://img.shields.io/badge/license-MIT-lightgrey)

---

## 🚀 Overview

This is a **full stack To-Do List application** that allows users to manage tasks with authentication, persistence, and a modern user experience.

It demonstrates a complete workflow:

- Backend API development
- Database integration
- Frontend UI/UX
- Deployment in production

---

## 🌐 Live Demo

- **Frontend:** https://todolist-3e9r.onrender.com/
- **Backend API:** https://user-crud-prisma.onrender.com/api

---

## ✨ Features

- 🔐 User authentication (JWT)
- 📝 Create, update, delete tasks (CRUD)
- ✅ Mark tasks as completed
- 🔎 Filter tasks (All / Pending / Completed)
- 💾 Persistent UI state (filters saved)
- ⚡ Smooth animations and microinteractions
- 🎨 Clean and modern UI

---

## 🧱 Tech Stack

### Frontend

- React (Vite)
- JavaScript (ES6+)
- CSS (custom UI)

### Backend

- Node.js
- Express.js
- Prisma ORM

### Database

- PostgreSQL (Render)

### Deployment

- Render (Frontend + Backend)

---

## 📁 Project Structure

```
frontend/                # React application (Vite)
  src/
    components/          # UI components
    services/            # API communication
    App.jsx              # Main component

backend/                 # Node.js + Express API
  src/
    controllers/         # Request handlers
    services/            # Business logic
    routes/              # API endpoints
    middleware/          # Auth & validation
  prisma/
    schema.prisma        # Database schema
```

---

## ⚙️ Environment Variables

### Backend (.env)

```
DATABASE_URL=your_database_url
JWT_SECRET=your_secret
```

### Frontend (.env)

```
VITE_API_URL=https://user-crud-prisma.onrender.com/api
```

---

## 🛠️ Installation (Local Development)

### Backend

```
cd backend
npm install
npx prisma migrate dev
npm run dev
```

### Frontend

```
cd frontend
npm install
npm run dev
```

---

## 🧠 Key Concepts Implemented

- RESTful API design
- JWT authentication
- Role-based authorization (USER / ADMIN)
- Resource ownership validation
- Prisma migrations
- React Hooks (useState, useEffect)
- Separation of concerns (controller/service pattern)
- Error handling and loading states
- UI/UX improvements with animations

---

## 📈 Future Improvements

- ✏️ Edit tasks
- 📅 Deadlines and priorities
- 🌙 Dark mode
- 🔄 Refresh tokens
- 👤 User profile
- 🧪 Testing (unit & integration)

---

## 👨‍💻 Author

**Yoam Gonzaga**

---

## 📌 Notes

This project was developed as part of a structured learning path toward becoming a **Full Stack Application Developer**. It reflects real-world problem solving, debugging, and deployment experience.

---

## ⭐ If you like this project

Give it a star on GitHub ⭐
