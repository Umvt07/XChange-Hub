#  XChange Hub

<p align="center">
  A modern MERN-based currency converter that provides accurate real-time exchange rates, instant currency conversion, and a clean responsive interface.
</p>

<p align="center">

![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express)
![NodeJS](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js)
![Netlify](https://img.shields.io/badge/Netlify-00C7B7?style=for-the-badge&logo=netlify)
![Render](https://img.shields.io/badge/Render-46E3B7?style=for-the-badge&logo=render)

</p>

---

# 🌐 Live Demo
https://lighthearted-figolla-387063.netlify.app/

# ✨ Features

- 🌍 Convert between international currencies instantly
- 📈 Fetches live exchange rates from the Currency API
- 🔄 One-click currency swap
- 📝 Stores conversion history locally
- 📱 Fully responsive design
- ⚡ Fast Express backend
- 🎯 Clean and minimal UI
- 🛡️ Proper error handling
- 🚀 Separate frontend and backend deployment


# ⚙️ How It Works

1. User enters the amount.
2. Selects the source currency.
3. Selects the destination currency.
4. Frontend sends a request to the Express backend.
5. Backend fetches live exchange rates from the Currency API.
6. Converted value is returned instantly.
7. Conversion history is stored in Local Storage.

---

# 🛠 Tech Stack

### Frontend

- React
- Vite
- CSS
- Axios

### Backend

- Node.js
- Express.js

### Deployment

- Netlify
- Render

### API

- Free Currency API

---

# 📂 Project Structure

```text
XChange-Hub
│
├── frontend
│   ├── public
│   ├── src
│   │   ├── assets
│   │   ├── App.jsx
│   │   ├── App.css
│   │   └── main.jsx
│   │
│   └── package.json
│
├── backend
│   ├── index.js
│   ├── package.json
│   └── .env
│
└── README.md
```

---

# 🚀 Getting Started

## Clone Repository

```bash
git clone https://github.com/YOUR_GITHUB_USERNAME/XChange-Hub.git
```

## Frontend

```bash
cd frontend

npm install

npm run dev
```

## Backend

```bash
cd backend

npm install

npm run dev
```

---

# 🔑 Environment Variables

Backend `.env`

```env
API_KEY=YOUR_API_KEY
PORT=4000
FRONTEND_URL=http://localhost:5173
```

---

# 🌍 API Endpoint

### Convert Currency

```http
GET /convert
```

Example

```http
/convert?base_currency=USD&currencies=INR
```

---


# 📌 Why I Built This

I created **XChange Hub** to strengthen my understanding of full-stack development by integrating a React frontend with an Express backend while working with third-party APIs. The project also helped me gain experience in deployment, API integration, responsive UI design, and managing client-server communication.

---

# 👨‍💻 Author

**Adarsh Kumar**

🎓 B.Tech CSE, BIT Mesra

GitHub:
https://github.com/Umvt07

