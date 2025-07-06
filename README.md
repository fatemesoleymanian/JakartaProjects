# Jakarta Projects Repository

This repository showcases full-stack (mostly) Java projects built using modern Jakarta/Spring Boot practices. Both are integrated with real-world tools like MongoDB Atlas and React, and demonstrate best practices for scalable backend architecture and clean frontend design.

---

## 📁 Projects

### 1. 🧑‍💼 Job Board App (Spring Boot + MongoDB Atlas Search)

A backend REST API that manages job listings with full-text search using MongoDB Atlas Search.

#### Features
- CRUD for job posts
- MongoDB Atlas Search with custom indexing
- Aggregation pipeline with `$search`, `$sort`, and `$limit`
- Environment-based MongoDB config
- Custom search repository (SearchRepository + SearchRepositoryImplementor)

#### Tech Stack
- Java 17
- Spring Boot
- MongoDB Atlas
- Spring Data MongoDB
- Custom aggregation queries
- Post model: `profile`, `desc`, `techs`, `exp`, etc.

---

### 2. 🛒 E-Commerce App (React + Spring Boot)

A simple full-stack ecommerce store built with:
- React + Bootstrap for the frontend
- Spring Boot REST API for the backend

#### Features
- Add/view/update/delete products
- Cart system with checkout popup
- Context API for global state
- Axios for API calls
- MongoDB as database (or H2 for local testing)

#### Frontend Stack
- React 18
- Bootstrap 5 + Bootstrap Icons
- React Router
- Axios
- Vite + ESLint setup

#### Backend Stack
- Spring Boot 3
- Spring Web + Spring Data
- MongoDB / H2 (easy switch)

---

## 🧠 Why This Repository?

This repository demonstrates:
- REST API design
- MongoDB Atlas integration with Spring
- Jakarta EE-style project structure
- Frontend/backend separation
- Clean and modular code

These projects are referenced on my resume and reflect my ability to build real-world applications.

---

## 🧑‍💻 How to Run

### Each project has a README.md file to lead how to run.

---

## 📄 License

MIT — feel free to use the code for your own learning or starter projects!
