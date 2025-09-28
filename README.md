# Internship Task – AI Creative App (Krea-Inspired)

This project is a **responsive web application** built with **Next.js** and **Tailwind CSS**.
It simulates a creative AI platform (inspired by Krea), where users can:

- Switch between **light/dark themes**.
- Browse different **AI generation tools** (Images, Video, Editing, Training, etc.).
- Use a **responsive header** with profile, notifications, theme toggle, and a mobile hamburger menu.
- Explore a **grid of 16 creative generation options** with icons, colors, and descriptions.

---

## Tech Stack

- **Next.js 14 (App Router)**
- **React**
- **Tailwind CSS** (for styling)
- **Custom Hooks** (`useTheme`, `useLocalStorage`)

---

## Features

- ⚡ Responsive **Header** with mobile hamburger dropdown
- 🌙 Dark/Light mode toggle with persistence
- 🎨 **16 creative tool cards** (Image, Video, Enhancer, Training, etc.)
- 📱 Mobile-first, fully responsive UI

---

## Installation & Setup

1. Clone this repository:

   ```bash
   git clone https://github.com/kingandrenz/cartolink-frontend.git
   cd cartolink-frontend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Run the development server:

   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Deployment

The project is deployed and accessible at:
👉 [https://cartolink-frontend-phi.vercel.app/](https://cartolink-frontend-phi.vercel.app/)

---

## Folder Structure

```
src
├── app
│   ├── Theme-provider.tsx
│   ├── layout.tsx
│   ├── page.tsx
│   ├── favicon.ico
│   └── globals.css
│
├── components
│   ├── Footer.tsx
│   ├── FooterLinks.tsx
│   ├── Generate.tsx
│   ├── GenerateCard.tsx
│   ├── Header.tsx
│   ├── Icons.tsx
│   ├── ImageCorousel.tsx
│   └── imageSlider.tsx
│
├── hooks
│   ├── useLocalStorage.ts
│   └── useTheme.ts
│
└── util
    └── data.ts
```

---

## Notes

- This project is **frontend-only** (no backend).
- Icons are consolidated in `Icons.tsx`.
- The **Generate section** toggles between _Show Less_ and _Show All_.
- Built as part of an **internship application task**.

---

## Author

**Anthony Kanu (Flexteck)**
📧 [kanuchibueze@gmail.com](mailto:kanuchibueze@gmail.com)
🔗 [LinkedIn](https://www.linkedin.com/in/flexteck/)
