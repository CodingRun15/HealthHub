# HealthHub
HealthHub is a centralized health and wellness management platform designed to empower users to take charge of their health through personalized insights, health tracking, and professional consultations.
# Objective
Objective behind choosing this project was to make a scalable and robust MERN application to help user consult doctors, interact with other users on community page and track their health and fitness progress.
# Project Type
Full Stack 
# Backend Deployed Link
https://healthhub-sug1.onrender.com/
# Frontend deployed link
https://health-hub-rust.vercel.app/
# Directory Structure
```
📦 HealthHub
├─ .gitignore
├─ Backend
│  ├─ .gitignore
│  ├─ Models
│  │  ├─ appointment.js
│  │  ├─ blacklistModel.js
│  │  ├─ userData.js
│  │  └─ userModel.js
│  ├─ Routers
│  │  ├─ bookApp.js
│  │  └─ userRouter.js
│  ├─ configs
│  │  ├─ .env
│  │  └─ db.js
│  ├─ index.js
│  ├─ middlewares
│  │  ├─ auth.js
│  │  └─ upload.js
│  ├─ package-lock.json
│  ├─ package.json
│  └─ uploads
│     └─ 663c930396cb7e391d856983.pdf
├─ Frontend
│  └─ HealthHubApp
│     ├─ .eslintrc.cjs
│     ├─ .gitignore
│     ├─ README.md
│     ├─ google257e8ce7e50306bb.html
│     ├─ index.html
│     ├─ package-lock.json
│     ├─ package.json
│     ├─ public
│     │  └─ vite.svg
│     ├─ src
│     │  ├─ App.jsx
│     │  ├─ assets
│     │  │  ├─ 6956037.jpg
│     │  │  ├─ BG-WorldMap-Alpha.png
│     │  │  ├─ BannerNoSky.png
│     │  │  ├─ BodyBackground.png
│     │  │  ├─ ConnectFromHome.png
│     │  │  ├─ ConnectFromWork.png
│     │  │  ├─ FindCare.png
│     │  │  ├─ FindCareDevice.png
│     │  │  ├─ FindCareUser.png
│     │  │  ├─ GBCHeader2-e1652631606462.jpg
│     │  │  ├─ Patient-BG-Providers.png
│     │  │  ├─ app-store.png
│     │  │  ├─ appointment.jpg
│     │  │  ├─ beaker.png
│     │  │  ├─ bg-covid.png
│     │  │  ├─ blue-favicon.png
│     │  │  ├─ blue-logo.png
│     │  │  ├─ calendar.png
│     │  │  ├─ chart.png
│     │  │  ├─ circlewithprongs.svg
│     │  │  ├─ clipboard.png
│     │  │  ├─ covid-vaccine.png
│     │  │  ├─ doctor.png
│     │  │  ├─ epic-med.png
│     │  │  ├─ favicon.png
│     │  │  ├─ google-play.png
│     │  │  ├─ header-logo.png
│     │  │  ├─ health_card.png
│     │  │  ├─ logo.png
│     │  │  ├─ map.png
│     │  │  ├─ medications.png
│     │  │  ├─ myhealth-mobileimg.png
│     │  │  ├─ note.png
│     │  │  ├─ speech_bubble_with_video.png
│     │  │  └─ vaccination.svg
│     │  ├─ components
│     │  │  └─ Navbar.jsx
│     │  ├─ css
│     │  │  ├─ Login.css
│     │  │  ├─ Navbar.css
│     │  │  ├─ Signup.css
│     │  │  ├─ bookAppointment.css
│     │  │  └─ homepage.css
│     │  ├─ index.css
│     │  ├─ main.jsx
│     │  ├─ pages
│     │  │  ├─ BookAppointment.jsx
│     │  │  ├─ Dashboard.jsx
│     │  │  ├─ HomePage.jsx
│     │  │  ├─ Login.jsx
│     │  │  └─ Signup.jsx
│     │  └─ routes
│     │     └─ AllRoutes.jsx
│     └─ vite.config.js
└─ README.md
```

# Video Walkthrough of the application









# Video walkthrough of the codebase






# Features
Responsive and dynamic website
User authentication and authorization
Password hashing for security
File upload system
Auto-email For appointments Booked
Mongo database for reduced server load

# Design Decisions or Assumption
Easy registration
Prescription upload option for repeat consultation
Notifications for reminder

# Installation
cd frontend/HealthHubApp
npm install
npm run dev

cd backend
node index.js 
This will run the server on the local host. The deployed server can be reached on https://healthhub-sug1.onrender.com/


# Images



