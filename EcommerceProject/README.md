# 🛒 Ecommerce Backend (Spring Boot)

This is the **backend API** for an eCommerce application built with **Spring Boot 3.5** and **H2 in-memory database**.  
It handles product management including image uploads, product search, and full CRUD operations.

---

## ⚙️ Tech Stack

- Java 21
- Spring Boot 3.5
- Spring Web + Spring Data JPA
- H2 Database (in-memory)
- Lombok
- Multipart image upload
- RESTful API design

---

## 🚀 Getting Started

### ✅ Prerequisites

- Java 21
- Maven 3.8+

---

## 🔧 Installation

1. **Clone the repository**

```bash
git clone https://github.com/fatemesoleymanian/JakartaProjects.git
cd EcommerceProject
````

2. **Run the application**

You can use your IDE or run via terminal:

```bash
mvn spring-boot:run
```

3. Access the API:

```
http://localhost:8080/api/products
```

---

## 📁 API Endpoints

| Method | Endpoint                        | Description                      |
| ------ | ------------------------------- | -------------------------------- |
| GET    | `/api/products`                 | Get all products                 |
| GET    | `/api/product/{id}`             | Get a single product by ID       |
| GET    | `/api/product/{id}/image`       | Get product image by ID          |
| POST   | `/api/product`                  | Add a new product (with image)   |
| PUT    | `/api/product/{id}`             | Update existing product          |
| DELETE | `/api/product/{id}`             | Delete product by ID             |
| GET    | `/api/products/search?keyword=` | Deep search by name, brand, etc. |

---

## 📦 Product Model

```json
{
  "id": 1,
  "name": "PlayStation 5",
  "description": "Next-gen console",
  "brand": "Sony",
  "price": 499.99,
  "category": "Gaming",
  "releaseDate": "2023-01-01",
  "productAvailable": true,
  "stockQuantity": 20,
  "imageName": "ps5.jpg",
  "imageType": "image/jpeg",
  "imageData": "..." // stored as byte[]
}
```

> ⚠️ `POST` and `PUT` endpoints expect `multipart/form-data` containing:
>
> * `product`: JSON of `Product` object
> * `imageFile`: actual image file (JPEG/PNG)

---

## 🧪 Sample cURL (Add Product)

```bash
curl -X POST http://localhost:8080/api/product \
  -H "Content-Type: multipart/form-data" \
  -F 'product={
    "name": "AirPods Pro",
    "description": "Wireless earbuds",
    "brand": "Apple",
    "price": 249.99,
    "category": "Audio",
    "releaseDate": "2022-11-01",
    "productAvailable": true,
    "stockQuantity": 50
  };type=application/json' \
  -F "imageFile=@airpods.jpg"
```

---

## 🗃️ Database

Using **in-memory H2** database with auto schema generation.

* H2 Console (if enabled): `http://localhost:8080/h2-console`
* JDBC URL: `jdbc:h2:mem:ecommerce`

> You can use `data.sql` to seed initial product data if needed.

---

## 🔍 Search Logic

Deep search by name, description, brand, or category (case-insensitive):

```sql
SELECT * FROM product
WHERE LOWER(name) LIKE '%keyword%'
OR LOWER(description) LIKE '%keyword%'
OR LOWER(brand) LIKE '%keyword%'
OR LOWER(category) LIKE '%keyword%'
```

---

## 📚 Project Structure

```text
com.example.ecommerceproject
├── controller/        → REST controllers
├── model/             → JPA entities (Product)
├── repository/        → Spring Data JPA interfaces
├── service/           → Business logic (ProductService)
├── resources/
│   ├── application.properties
│   └── data.sql       → Optional initial seed
└── EcommerceProjectApplication.java
```

---

## 📌 Future Improvements

* 🛒 Order & Cart system
* 👤 User authentication (JWT)
* 📦 Pagination & sorting
* 📁 Store images externally (S3, filesystem)
* ✅ Unit + integration testing

---

## 🧑‍💻 Author

* **Fateme Soleymanian** – [@fatemesoleymanian](https://github.com/fatemesoleymanian)
---

## 📃 License

This project is for educational/demo purposes.

