# 🛍️ Ecommerce Frontend (React + Vite)

This is the **frontend UI** for an eCommerce application built with **React**, **Vite**, **Bootstrap**, and **React Router**.  
It interacts with the Spring Boot backend to manage products, display a shopping cart, handle checkout, and support image uploads.

---

## ⚙️ Tech Stack

- React 18
- Vite 5
- React Router DOM 6
- Axios (API communication)
- Bootstrap 5 + Bootstrap Icons
- React Icons
- React Context API (global state)
- Sass (optional styling)
- ESLint (code linting)

---

## 🚀 Getting Started

### ✅ Prerequisites

- Node.js (v18 or higher recommended)
- Backend server running at `http://localhost:8080`

---

## 🔧 Installation

1. **Clone the repository**

```bash
git clone https://github.com/fatemesoleymanian/JakartaProjects.git
cd JakartaProjects/EcommerceFront
```

2. **Install dependencies**

```bash
npm install
```

3. **Run the development server**

```bash
npm run dev
```

App will be available at:

```
http://localhost:5173
```

---

## 🧭 Project Structure

```text
src/
├── assets/               # Images, icons, etc.
├── components/           # Reusable UI components
│   ├── AddProduct.jsx
│   ├── Cart.jsx
│   ├── CheckoutPopup.jsx
│   ├── Home.jsx
│   ├── Navbar.jsx
│   ├── Product.jsx
│   └── UpdateProduct.jsx
├── Context/
│   └── Context.jsx       # React Context for global state
├── App.jsx               # Main routes and layout
├── App.css               # Global styles
├── axios.jsx             # Axios base instance for API calls
├── main.jsx              # Entry point
└── index.css             # CSS reset or global styles
```

---

## 🌐 API Integration

Uses `axios` to interact with Spring Boot backend at:

```
http://localhost:8080/api/products
```

> 💡 The base URL can be configured in `axios.jsx`.

---

## 📦 Key Features

- 🔍 Browse all products
- 🛒 Add to cart and checkout
- 📤 Upload product images
- ➕ Add / Edit / Delete products
- 📦 Deep search by keyword
- 💾 React Context for cart state management
- ⚡ Fast dev experience with Vite

---

## 🔌 Scripts

| Command           | Description              |
| ----------------- | ------------------------ |
| `npm run dev`     | Start development server |
| `npm run build`   | Build for production     |
| `npm run preview` | Preview production build |
| `npm run lint`    | Lint source code         |

---

## 💡 Environment Tips

- You can use `.env` to configure the backend base URL:

```env
VITE_API_URL=http://localhost:8080
```

And read it inside `axios.jsx`:

```js
const baseURL = import.meta.env.VITE_API_URL;
```

---

## 📌 To-Do / Future Ideas

- ✅ Add Toast / Notifications (e.g. success messages)
- 🔐 Add Login/Register + JWT authentication
- 🧾 Show Order History
- 📱 Make mobile responsive
- 🌍 Add i18n / multi-language support

---

## 🧑‍💻 Author

- **Fateme Soleymanian** – [@fatemesoleymanian](https://github.com/fatemesoleymanian)

---

## 📃 License

This project is for demo/learning purposes.
