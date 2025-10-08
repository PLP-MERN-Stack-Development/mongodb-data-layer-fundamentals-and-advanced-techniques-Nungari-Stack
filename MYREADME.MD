# MongoDB Data Layer Fundamentals — Week 1 Assignment

This project demonstrates the setup and use of MongoDB for basic and advanced data operations using JavaScript files executed in `mongosh`.  
It includes CRUD operations, advanced queries, aggregation pipelines, and indexing.

---

## Project Structure

mongodb-data-layer-fundamentals-and-advanced-techniques-Nungari-Stack/
│
├── insert_books.js # Script to create database & insert book documents
├── queries.js # All MongoDB CRUD, advanced, aggregation & indexing queries
├── README.md # Documentation and execution guide
└── screenshots/ # Screenshots of MongoDB Compass / Atlas data


---

## ⚙️ Task Summary

### **Task 1: MongoDB Setup**
- Installed MongoDB locally or set up a MongoDB Atlas cluster.
- Created a database named `plp_bookstore`.
- Created a collection named `books`.

### **Task 2: Basic CRUD Operations**
- Inserted **10 book documents** using `insert_books.js`.
- Fields included:
  - `title` (String)
  - `author` (String)
  - `genre` (String)
  - `published_year` (Number)
  - `price` (Number)
  - `in_stock` (Boolean)
  - `pages` (Number)
  - `publisher` (String)
- Implemented queries to:
  - Find all books in a genre.
  - Find books published after a certain year.
  - Find books by a specific author.
  - Update the price of a book.
  - Delete a book by its title.

### **Task 3: Advanced Queries**
- Queried for books that are both **in stock** and **published after 2010**.
- Used **projection** to display only `title`, `author`, and `price`.
- Implemented **sorting** by price (ascending & descending).
- Used **limit** and **skip** for pagination (5 books per page).

### **Task 4: Aggregation Pipeline**
- Calculated **average price of books by genre**.
- Found the **author with the most books**.
- Grouped books by **publication decade** and counted them.

### **Task 5: Indexing**
- Created an **index on `title`** for faster searches.
- Created a **compound index** on `author` and `published_year`.
- Used **`explain()`** to show performance improvements.

---

## How to Run the Scripts

### **1 Clone the Repository**
```bash
git clone https://github.com/PLP-MERN-Stack-Development/mongodb-data-layer-fundamentals-and-advanced-techniques-Nungari-Stack.git
cd mongodb-data-layer-fundamentals-and-advanced-techniques-Nungari-Stack

2️. Run insert_books.js

This script creates the plp_bookstore database and inserts book data.

mongosh insert_books.js


Or, specify a connection string:

mongosh "mongodb://localhost:27017" insert_books.js

3️. Run queries.js

Execute all CRUD, advanced, and aggregation operations:

mongosh queries.js

4️. View Data in MongoDB Compass

Open MongoDB Compass → Connect to your database →
View the plp_bookstore → books collection.

 Screenshot Evidence

A screenshot of MongoDB Compass showing the collection and sample documents is included in:

screenshots/compass_view.png

Author

Name: Nungari Maina
Course: PLP MERN Stack Development — MongoDB Data Layer Fundamentals