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
1. Responsive and dynamic website
2. User authentication and authorization
3. Password hashing for security
4. File upload system
5. Auto-email For appointments Booked
6. Mongo database for reduced server load

# Design Decisions or Assumption
1. Easy registration
2. Prescription upload option for repeat consultation
3. Notifications for reminder

# Installation
cd frontend/HealthHubApp
npm install
npm run dev

cd backend
node index.js 
This will run the server on the local host. The deployed server can be reached on https://healthhub-sug1.onrender.com/


# Images
![WhatsApp Image 2024-05-13 at 5 08 52 PM](https://github.com/CodingRun15/HealthHub/assets/154725027/67104291-f7bc-4177-a037-e26dc0eb9c26)
![WhatsApp Image 2024-05-13 at 5 08 50 PM](https://github.com/CodingRun15/HealthHub/assets/154725027/ae98aa70-ad90-4007-8f64-b4d6d112652d)
![WhatsApp Image 2024-05-13 at 5 08 51 PM](https://github.com/CodingRun15/HealthHub/assets/154725027/5493cc9e-3f0d-400d-8eef-1df78aef8eda)
![WhatsApp Image 2024-05-13 at 5 08 51 PM (1)](https://github.com/CodingRun15/HealthHub/assets/154725027/0bc1b0ac-a9a3-4e44-aed9-371a4f225f19)
![WhatsApp Image 2024-05-13 at 5 08 51 PM (2)](https://github.com/CodingRun15/HealthHub/assets/154725027/024461f5-2de3-4276-8db5-96a59b7aaeb1)



