# DeshDarshan 🇮🇳

DeshDarshan is a cultural web platform designed to help explore all 28 States and 8 Union Territories of India. Discover regional food, festivals, dances, heritage sites, and hidden fun facts through interactive cards, image sliders, and modern UI blending tradition with technology in a unique digital journey. ✨

## 🌐 Live Demo

[![Live Demo](https://img.shields.io/badge/Live_Demo-DeshDarshan-brightgreen?style=for-the-badge&logo=google-chrome)](https://sampadatiwari30.github.io/DeshDarshan/)

🔗 **Live URL:** https://sampadatiwari30.github.io/DeshDarshan/

## 🧩 Tech Stack

- **Frontend:** HTML5, CSS3, JavaScript (ES6+)
- **Frameworks/Libraries:** Bootstrap 5
- **Design:** Responsive UI/UX, Card-based layout
- **Version Control:** Git, GitHub

## 📂 Folder Structure

```bash
DeshDarshan/
│
├── assets/               # Images and other static resources
├── states/               # Individual state detail pages
├── index.html            # Main homepage
├── style.css             # Custom styles
├── script.js             # JS for state linking
└── README.md             # Project documentation
```

## 🗂️ Table of Contents

1. [🌐 Live Demo](#-live-demo)
1. [🧩 Tech Stack](#-tech-stack)
1. [📂 Folder Structure](#-folder-structure)
1. [🤔 Problem Statement](#-problem-statement)
1. [🌟 Features](#-features)
1. [🛠️ Installation](#️-installation)
1. [💵 How to Contribute](#-how-to-contribute)
1. [📝 Note](#-note)
1. [💗 Contributors](#-our-contributors)
1. [🛠️ Troubleshooting](#️-troubleshooting)
1. [🥑 License](#-license)
1. [⭐ Star the Repo!](#-star-the-repo)
1. [🌸 GSSoC Participation](#-for-gssoc-participation-era)

## 🤔 Problem Statement

India's cultural diversity is often reduced to just a few mainstream destinations. DeshDarshan addresses:

- 🏞️ Lack of platforms showcasing lesser-known cultural locations
- 🎊 No centralized information about regional traditions
- 🎯 Absence of personalized travel recommendations

## 🌟 Features

**Core Functionalities:**

- 🗺️ **State-wise Exploration**: Detailed cultural profiles
- 📸 **Visual Galleries**: Heritage spot collections
- 🔍 **Smart Recommendations**: Personalized suggestions
- 🧠 **Cultural Quizzes**: Interactive learning
- 📅 **Interactive Festival Calendar**: Browse and filter festivals across India
- 🌐 **Multi-language Support**: Coming soon

## 🛠️ Installation

1. Fork the repository
1. Clone locally:

```bash
git clone https://github.com/sampadatiwari30/DeshDarshan.git
cd DeshDarshan
```

1. (Optional) Run with local Node server (for contact form & API headers):

```bash
npm install
npm run dev
```

Server runs at: <http://localhost:3000>

Static-only preview: open `index.html` directly in browser (no backend features).

## 🔑 Firebase Configuration

Update your Firebase SDK configuration in the file:

```bash
js/firebase.js
```

Never commit real Firebase or Gmail secrets. Use `.env` for server values and keep `firebaseConfig` keys in a non-committed local copy if sensitive.

To enable Google Sign-In and other Firebase services, update your Firebase SDK configuration inside the project:

```bash
// Firebase Config
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID",
  measurementId: "YOUR_MEASUREMENT_ID"
};
```

## 💵 How to Contribute

We ❤️ Open Source and beginner-friendly contributions!  
Follow these steps to get started:

1. Check existing issues or create one describing your feature/bug.
1. Comment on the issue to get assigned.
1. Fork 🍴 → Clone 👥 → Create a new branch:

```bash
# Fork in your GitHub account
git clone https://github.com/sampadatiwari30/DeshDarshan.git
cd DeshDarshan
```

```bash
# Create a new branch
git checkout -b feature/your-feature-name
```

```bash
# Make your changes, then:
git add .
git commit -m "Add: your-feature-name"
git push origin feature/your-feature-name
```

1. Create Pull Request to main branch

## 📝 Note

✅ No need to wait for issue assignment — just comment and start working!

## 💗 Our Contributors

[![Contributors](https://contrib.rocks/image?repo=sampadatiwari30/DeshDarshan)](https://github.com/sampadatiwari30/DeshDarshan/graphs/contributors)

## 🛠️ Troubleshooting

Having trouble setting up the project?

- Double-check that you're opening index.html
- If images are not loading, check path references.
- Still stuck? Raise an issue - we're here to help ✨
- Not sure how to set up the project? Check the README steps again
- Contact form not working? Ensure you created a `.env` from `.env.example` and enabled Gmail App Passwords.

## 🥑 License

This project is licensed under the **MIT License**.

Feel free to fork, remix, or build upon it — with proper credit 🙏

## ⭐ Star the Repo

If this project inspired you or helped in any way — do leave a ⭐
It keeps us going and growing!

## 🌸 For GSSoC Participation Era

This repository is a part of **GirlScript Summer of Code!** 💜

We welcome contributors of all levels.

### If you're participating in GSSoC, feel free to raise issues and PRs tagged with **GSSoC label**

## Happy Contributing! 🎉
