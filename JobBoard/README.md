# 🧰 JobBoard Backend

A simple **Spring Boot** backend service for managing job postings.  
This backend exposes RESTful APIs for creating, searching, and retrieving job posts, and stores data in a **MongoDB Atlas** database.

---

## 🚀 Tech Stack

- Java 21
- Spring Boot 3.5.3
- Spring Web
- Spring Data MongoDB
- MongoDB Atlas (Cloud-hosted)
- SpringDoc OpenAPI (Swagger UI)

---

## 📦 Project Structure

```text
src/
├── controller/         → REST API endpoints
├── model/              → MongoDB document model (`Post`)
├── service/            → Business logic
└── application.properties
````

---

## 📄 API Endpoints

Base URL: `http://localhost:8080/posts`

| Method | Endpoint               | Description                  |
| ------ | ---------------------- | ---------------------------- |
| GET    | `/posts`               | Get all job posts            |
| POST   | `/posts`               | Create a new job post        |
| GET    | `/posts/search/{text}` | Search posts by profile/desc |

> All APIs are CORS-enabled for frontend on `http://localhost:3000`.

---

## 🧪 Example Post JSON

```json
{
  "desc": "Backend Developer with Java",
  "exp": 3,
  "profile": "Java Developer",
  "techs": ["Java", "Spring Boot", "MongoDB"]
}
```

---

## 🛠️ Setup & Run Locally

### ✅ Prerequisites

* Java 21+
* Maven
* Internet connection (MongoDB Atlas)

### ⚙️ Steps

1. Clone the repo:

   ```bash
   git clone https://github.com/fatemesoleymanian/JakartaProjects.git
   cd JobBoard
   ```

2. Build and run the project:

   ```bash
   mvn spring-boot:run
   ```

3. Backend will be running at `http://localhost:8080`

---

## 📚 Swagger API Docs

Once the app is running, open:

```
http://localhost:8080/swagger-ui.html
```

To explore and test all available endpoints.

---

## 🗃️ MongoDB Config (Atlas)

> `application.properties` uses MongoDB Atlas:

```
spring.data.mongodb.uri=mongodb+srv://<username>:<password>@cluster0.mongodb.net/?...
spring.data.mongodb.database=springboot
```

⚠️ Replace credentials in production. Use `.env` or external config management for security.

---

## ✨ Features

* Add, view, and search job posts
* MongoDB document model
* RESTful architecture
* CORS-enabled for frontend integration
* OpenAPI/Swagger documentation

---

## 📁 Example Document (MongoDB)

```json
{
  "_id": "64cc4a02342f9f45d654a12b",
  "desc": "Fullstack Developer",
  "exp": 2,
  "profile": "React + Spring",
  "techs": ["React", "Spring Boot", "MySQL"]
}
```

---

## 🧑‍💻 Author

* **Fateme Soleymanian** – [@fatemesoleymanian](https://github.com/fatemesoleymanian)

---

## 📃 License

This project is for educational/demo purposes.

---

## 🧩 Next Steps

* ✅ Basic CRUD APIs
* 🔜 Add authentication (JWT)
* 🔜 Pagination & sorting
* 🔜 Filtering by techs
- Include MongoDB repository interface in the backend
- Add Docker support
- Write test instructions in the README

Happy coding! 🚀

