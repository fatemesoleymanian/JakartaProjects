# 🎯 JobBoard Frontend

This is the **React.js frontend** for the JobBoard application.  
It connects to the Spring Boot backend and allows users to **view, add, and search** job postings using a clean Material UI design.

---

## ⚙️ Tech Stack

- React 18
- Material UI (MUI v5)
- Axios (for HTTP requests)
- React Router v6
- JSON Server (for mock testing if needed)

---

## 📦 Project Structure

```text
src/
├── pages/             → Page-level
├── App.js             → App layout & routes
└── index.js           → Entry point
```

---

## 🚀 Getting Started

### ✅ Prerequisites

- Node.js 18+
- NPM or Yarn
- Spring Boot backend (running on port 8080)

---

## 🛠️ Installation

1. Clone the repo:

   ```bash
   git clone https://github.com/fatemesoleymanian/JakartaProjects.git
   cd JakartaProjects/JobBoardFront
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm start
   ```

4. Visit the app at:

   ```
   http://localhost:3000
   ```

---

## 🌐 Backend Integration

Make sure your Spring Boot backend is running on:

```
http://localhost:8080/posts
```

The frontend uses Axios to send requests to these endpoints:

- `GET /posts` → Fetch all job posts
- `POST /posts` → Add a new job post
- `GET /posts/search/{text}` → Search job posts

> The backend must have CORS enabled for `http://localhost:3000`

---

## 📄 Example Features

- 🧾 View a list of job posts
- 🔍 Search for posts by profile or description
- ➕ Add new job posts via form
- 🎨 Clean Material UI design (MUI v5)
- 🔁 Axios integration with backend

---
## 🧪 Testing

Basic test setup with React Testing Library:

```bash
npm test
```

---

## 📌 Future Improvements

- 🔐 Add authentication (JWT)
- 🗃️ Filter by technologies
- 📱 Responsive design
- ⏳ Add loading spinners and error states

---

## 🧑‍💻 Author

* **Fateme Soleymanian** – [@fatemesoleymanian](https://github.com/fatemesoleymanian)
---

## 📃 License

This project is for educational/demo purposes.

---

Happy shipping! 🛳️
