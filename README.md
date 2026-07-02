<h1 align="center">💱 XChange Hub</h1>

<p align="center">
A full-stack MERN currency converter that delivers real-time exchange rates with a fast Express backend and a clean, responsive React interface.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black"/>
  <img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite"/>
  <img src="https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express"/>
  <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white"/>
  <img src="https://img.shields.io/badge/Netlify-00C7B7?style=for-the-badge&logo=netlify&logoColor=white"/>
  <img src="https://img.shields.io/badge/Render-46E3B7?style=for-the-badge"/>
</p>

---

# 🌐 Live Demo

### Frontend
https://lighthearted-figolla-387063.netlify.app/

### Backend
https://YOUR_RENDER_BACKEND_URL.onrender.com

---

# 📌 Overview

XChange Hub is a MERN-based currency converter that allows users to convert between international currencies using live exchange rates. The application follows a client-server architecture where the React frontend communicates with an Express backend, which securely fetches exchange-rate data from a third-party API.

The project also stores recent conversion history locally, providing a smoother user experience.

---

# ✨ Features

- 🌍 Supports international currencies
- ⚡ Live exchange rates
- 🔄 One-click currency swap
- 📈 Instant conversion
- 💾 Local conversion history
- 📱 Responsive design
- 🚀 Fast Express backend
- 🛡️ Error handling
- 🎨 Clean and modern UI

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

# 📂 Folder Structure

```text
XChange-Hub
│
├── frontend
│   ├── public
│   ├── src
│   ├── package.json
│
├── backend
│   ├── index.js
│   ├── package.json
│   ├── .env
│
└── README.md
```

---

# ⚙️ Installation

## Clone Repository

```bash
git clone https://github.com/Umvt07/XChange-Hub.git
```

---

## Install Frontend

```bash
cd frontend

npm install

npm run dev
```

---

## Install Backend

```bash
cd backend

npm install

npm start
```

---

# 🔑 Environment Variables

Create a `.env` file inside the backend directory.

```env
API_KEY=YOUR_API_KEY
PORT=4000
FRONTEND_URL=http://localhost:5173
```

---

# 🔄 API Endpoint

### Convert Currency

```http
GET /convert
```

Example

```http
/convert?base_currency=USD&currencies=INR
```

---

# ⚡ Application Flow

1. User enters an amount.
2. User selects source currency.
3. User selects destination currency.
4. Frontend sends a request to the Express backend.
5. Backend retrieves live exchange rates.
6. Converted value is returned instantly.
7. Conversion history is saved locally.

---

# 🚀 Future Enhancements

- 🌙 Dark mode
- ⭐ Favorite currencies
- 📊 Exchange-rate charts
- 🔍 Searchable currency list
- 📅 Historical exchange rates
- 🌎 Multi-currency conversion
- 📈 Exchange-rate trends

---

# 🎯 Learning Outcomes

This project helped me improve my understanding of:

- REST APIs
- React development
- Express.js backend development
- Client-server communication
- API integration
- Responsive UI design
- Deployment using Netlify and Render
- Environment variable management

---

# 👨‍💻 Author

**Adarsh Kumar**

🎓 B.Tech CSE, BIT Mesra

GitHub: https://github.com/Umvt07

LinkedIn: https://www.linkedin.com/in/YOUR-LINKEDIN

---

# 🙌 Acknowledgements

- Free Currency API
- React
- Express.js
- Node.js
- Netlify
- Render

---

# ⭐ Show Your Support

If you found this project useful, consider giving it a ⭐ on GitHub. It motivates me to build more useful projects.

---

# 📄 License

This project is open-source and available for learning and educational purposes.
