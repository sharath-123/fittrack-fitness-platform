# FitTrack — Fitness & Wellness Platform

FitTrack is a modern fitness and wellness platform built with Next.js, Tailwind CSS, and Shadcn/UI. The project focuses on delivering a premium frontend experience with smooth onboarding flows, responsive layouts, interactive dashboards, and polished UI/UX.

---

# ✨ Features

## 🌟 Landing Page
- Modern hero section with gradients and animations
- Responsive sticky navbar with mobile drawer
- Features section with hover interactions
- Testimonials section
- Pricing cards
- CTA sections
- Smooth animations using Framer Motion
- Fully responsive design

---

## 🔐 5-Step Onboarding Flow
- Multi-step onboarding/authentication experience
- Real-time form validation using Zod + React Hook Form
- Animated transitions between steps
- Fitness goals selection
- Activity level selection
- Profile setup with avatar upload preview
- Progress persistence using Zustand + localStorage
- Route protection and onboarding flow handling

---

## 📊 Dashboard
- Personalized welcome section
- Fitness stats cards
- Weekly activity chart
- Goal progress tracking
- Recent workouts section
- Responsive sidebar navigation
- Dynamic onboarding-based personalization

---

# 🛠️ Tech Stack

- Next.js 16 (App Router)
- TypeScript
- Tailwind CSS
- Shadcn/UI
- Framer Motion
- Zustand
- React Hook Form
- Zod
- Recharts
- Lucide React

---

# 📱 Responsive Design

The application is optimized for:
- Desktop
- Tablet
- Mobile devices

---

# 🚀 Getting Started

## Clone the Repository

```bash
git clone https://github.com/YOUR_USERNAME/fittrack-fitness-platform.git
```

---

## Navigate to Project Folder

```bash
cd fittrack-fitness-platform
```

---

## Install Dependencies

```bash
npm install
```

---

## Run Development Server

```bash
npm run dev
```

---

## Open in Browser

```txt
http://localhost:3000
```

---

# 📦 Available Scripts

## Start Development Server

```bash
npm run dev
```

## Create Production Build

```bash
npm run build
```

## Start Production Server

```bash
npm run start
```

## Run Linting

```bash
npm run lint
```

---

# 📂 Project Structure

```txt
app/
components/
store/
lib/
public/
```

---

# 🎯 Highlights

- Clean component-based architecture
- Modern SaaS-inspired UI
- Smooth onboarding experience
- Persistent user state management
- Mobile-first responsive layouts
- Premium dashboard interactions
- Reusable UI components
- Framer Motion animations and micro-interactions

---

# 🌐 Live Demo

https://fittrack-fitness-platform-five.vercel.app/

---

# 📸 Screenshots

## Landing Page ( desktop )
<img width="1365" height="637" alt="image" src="https://github.com/user-attachments/assets/2b15763d-0b99-4554-b892-b18d40023a66" />

(Mobile Version ) - <img width="1080" height="2408" alt="1000284666" src="https://github.com/user-attachments/assets/8277e500-0498-4529-9cf2-049df9ecc917" />



## Onboarding Flow
<img width="624" height="583" alt="image" src="https://github.com/user-attachments/assets/45379ae5-bb3d-4d99-b2f9-5e2956c2dbef" />
<img width="600" height="510" alt="image" src="https://github.com/user-attachments/assets/6cc0b133-9d1e-42a6-b7a3-6bb54af4b57f" />
<img width="567" height="609" alt="image" src="https://github.com/user-attachments/assets/b8270ab5-2d61-4a60-96c0-ccffb65d6c13" />
<img width="547" height="601" alt="image" src="https://github.com/user-attachments/assets/6fd2113c-151f-4566-bbd9-07cd97010fda" />
<img width="445" height="608" alt="image" src="https://github.com/user-attachments/assets/2c9af03b-d666-48e6-9235-773de73ac213" />


## Dashboard
<img width="1363" height="636" alt="image" src="https://github.com/user-attachments/assets/f3240512-0385-458d-9469-f18ce5e2189d" />


# 🧩 Component Architecture

The application follows a modular and reusable component architecture.

## Folder Structure

```txt
components/
├── dashboard/
├── onboarding/
├── shared/
├── providers/
└── ui/
```

## Architecture Decisions

- Zustand is used for global onboarding state management and persistence.
- React Hook Form + Zod are used for scalable form validation.
- Framer Motion powers onboarding and dashboard animations.
- Shared UI primitives are built using Shadcn/UI.
- Dashboard widgets are modularized into reusable sections.
- Tailwind CSS utility classes are used for responsive styling consistency.
- Next.js App Router is used for route organization and layout handling.
---

# 👨‍💻 Author

Sharath Chandra
