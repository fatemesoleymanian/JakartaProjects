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
## 🔍 Full-Text Search with MongoDB Atlas

This project includes **advanced text search** capabilities powered by **MongoDB Atlas Search**.

### 🧠 How it Works

Instead of basic `.find()` queries, this implementation uses the `$search` aggregation stage via a **custom search index** on Atlas.

We define a search repository:

```java
public interface SearchRepository {
    List<Post> findByText(String text);
}
````

And its custom implementation:

```java
@Component
public class SearchRepositoryImplementor implements SearchRepository {

    @Autowired private MongoClient mongoClient;
    @Autowired private MongoConverter converter;
    @Autowired private Environment env;

    @Override
    public List<Post> findByText(String text) {
        MongoDatabase database = mongoClient.getDatabase(env.getProperty("spring.data.mongodb.database"));
        MongoCollection<Document> collection = database.getCollection("JobPost");

        AggregateIterable<Document> result = collection.aggregate(List.of(
            new Document("$search",
                new Document("index", "default")
                    .append("text", new Document("query", text)
                    .append("path", List.of("techs", "desc", "profile")))
            ),
            new Document("$sort", new Document("exp", 1)),
            new Document("$limit", 5)
        ));

        List<Post> posts = new ArrayList<>();
        result.forEach(doc -> posts.add(converter.read(Post.class, doc)));

        return posts;
    }
}
```

---

### 🔧 MongoDB Atlas Setup

1. Go to **Atlas > Collections > Search Indexes**
2. Create a new index named `"default"` on the `JobPost` collection
3. Sample JSON index definition:

```json
{
  "mappings": {
    "dynamic": false,
    "fields": {
      "techs": { "type": "string" },
      "desc": { "type": "string" },
      "profile": { "type": "string" }
    }
  }
}
```

---

### 🔎 Example Query

Searching for a keyword across fields:

```json
[
  {
    "$search": {
      "index": "default",
      "text": {
        "query": "java",
        "path": ["techs", "desc", "profile"]
      }
    }
  },
  { "$sort": { "exp": 1 } },
  { "$limit": 3 }
]
```

---

### ✅ Benefits

* More relevant job search results
* Indexed and ranked using MongoDB Atlas Search engine
* Clean integration with Spring Boot via custom repository

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

