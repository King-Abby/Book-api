# Book API

## Overview

The **Book API** is a RESTful API that allows users to manage a collection of books. Each book has the following attributes:

- **Title** (string): The title of the book.
- **Author** (string): The author of the book.
- **Genre** (enum): The genre of the book. Possible values: `Comedy`, `Tragedy`, `Action`.

This API is built using **Node.js**, **Express**, and **MongoDB** for the database.

---

## 1. API Endpoints

### **1. GET /api/books**

- **Description**: Retrieves a list of all books in the database.
- **Method**: `GET`
- **URL**: `/api/books`
- **Response**: Returns a list of books, each containing the following attributes:
  - `id`: The unique ID of the book.
  - `title`: The title of the book.
  - `author`: The author of the book.
  - `genre`: The genre of the book.

---

### **2. GET /api/books/{id}**

- **Description**: Retrieves details of a specific book by its ID.
- **Method**: `GET`
- **URL**: `/api/books/{id}`

  Replace `{id}` with the **MongoDB ObjectID** of the book.

- **Response**: Returns the details of the book with the specified `id`, including:
  - `id`: The unique ID of the book.
  - `title`: The title of the book.
  - `author`: The author of the book.
  - `genre`: The genre of the book.

---

### **3. POST /api/books**

- **Description**: Creates a new book in the database.
- **Method**: `POST`
- **URL**: `/api/books`
- **Request Body**:
  - `title`: The title of the book (required).
  - `author`: The author of the book (required).
  - `genre`: One of the predefined genres (`Comedy`, `Tragedy`, `Action`) (required).
- **Response**: Returns the newly created book object, which includes:
  - `id`: The unique ID of the book.
  - `title`: The title of the book.
  - `author`: The author of the book.
  - `genre`: The genre of the book.

---

### **4. PUT /api/books/{id}**

- **Description**: Updates an existing book by its ID.
- **Method**: `PUT`
- **URL**: `/api/books/{id}`

  Replace `{id}` with the **MongoDB ObjectID** of the book.

- **Request Body**:
  - `title`: The updated title of the book (required).
  - `author`: The updated author of the book (required).
  - `genre`: One of the predefined genres (`Comedy`, `Tragedy`, `Action`) (required).
- **Response**: Returns the updated book object, which includes:
  - `id`: The unique ID of the book.
  - `title`: The updated title of the book.
  - `author`: The updated author of the book.
  - `genre`: The updated genre of the book.

---

### **5. DELETE /api/books/{id}**

- **Description**: Deletes a book by its ID.
- **Method**: `DELETE`
- **URL**: `/api/books/{id}`

  Replace `{id}` with the **MongoDB ObjectID** of the book.

- **Response**:
  - Returns a `204 No Content` status if the book is successfully deleted.
  - If the book with the specified **ID** doesn't exist, returns a `404 Not Found` error.

---

## 2. Setup Instructions

### **Prerequisites**

Before setting up the API locally, ensure you have the following:

- **Node.js**: Version 14.x or higher.
- **MongoDB**: You can use a local MongoDB instance or a cloud-based solution like **MongoDB Atlas**.

### **Installation**

1. **Clone the repository**:
   ```bash
   git clone https://github.com/King-Abby/book-api.git
   cd book-api
   Install dependencies:
   ```

bash
Copy code
npm install
Set up environment variables:

Create a .env file in the root directory of the project.
Add your MongoDB connection URI in the .env file:
bash
Copy code
MONGO_URI=mongodb+srv://your-username:your-password@cluster.mongodb.net/bookdb?retryWrites=true&w=majority
If you're using a local MongoDB server, you can simply use:

bash
Copy code
MONGO_URI=mongodb://localhost:27017/bookdb
Run Instructions
Start the API locally:

bash
Copy code
npm start
The API will run on http://localhost:5000.

3. Deployment
   The Book API has been successfully deployed to Vercel. You can access the live API at:

Deployed API URL: https://your-app-name.vercel.app

4. Submission
   GitHub Repository: https://github.com/King-Abby/book-api
   Deployed API: https://your-app-name.vercel.app
   Additional Notes
   Testing the API: You can test the API using Postman or any HTTP client by sending requests to the provided endpoints.
   Ensure the MongoDB database is correctly connected and that the data is being saved properly in your MongoDB instance (Atlas or local).
   This README.md now includes the following sections:

## Additional Notes

Testing the API: You can test the API using Postman or any HTTP client by sending requests to the provided endpoints.
Ensure the MongoDB database is correctly connected and that the data is being saved properly in your MongoDB instance (Atlas or local).

## Conclusion

The Book API provides a simple and efficient way to manage books through a RESTful interface. It supports essential CRUD operations like creating, retrieving, updating, and deleting books with predefined genres. The API is easy to set up and can be deployed to any cloud service like Vercel, making it accessible from anywhere.

This project demonstrates the fundamental concepts of API development using Node.js and MongoDB. With the included documentation and setup instructions, you should be able to easily deploy and extend this API to fit your needs.
