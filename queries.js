// ----------------------------------------------------
// 🧩 Task 1: MongoDB Setup
// ----------------------------------------------------

use('plp_bookstore'); // Create or switch to database

db.createCollection("books");

// ----------------------------------------------------
// 🧩 Task 2: Basic CRUD Operations
// ----------------------------------------------------

// Insert at least 10 book documents
db.books.insertMany([
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    genre: "Fiction",
    published_year: 1925,
    price: 12.99,
    in_stock: true,
    pages: 218,
    publisher: "Scribner"
  },
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    genre: "Fiction",
    published_year: 1960,
    price: 10.99,
    in_stock: true,
    pages: 281,
    publisher: "J.B. Lippincott & Co."
  },
  {
    title: "1984",
    author: "George Orwell",
    genre: "Dystopian",
    published_year: 1949,
    price: 9.99,
    in_stock: false,
    pages: 328,
    publisher: "Secker & Warburg"
  },
  {
    title: "A Brief History of Time",
    author: "Stephen Hawking",
    genre: "Science",
    published_year: 1988,
    price: 15.99,
    in_stock: true,
    pages: 212,
    publisher: "Bantam Books"
  },
  {
    title: "The Silent Patient",
    author: "Alex Michaelides",
    genre: "Thriller",
    published_year: 2019,
    price: 14.49,
    in_stock: true,
    pages: 336,
    publisher: "Celadon Books"
  },
  {
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    genre: "Fantasy",
    published_year: 1937,
    price: 11.50,
    in_stock: true,
    pages: 310,
    publisher: "George Allen & Unwin"
  },
  {
    title: "Becoming",
    author: "Michelle Obama",
    genre: "Biography",
    published_year: 2018,
    price: 16.99,
    in_stock: true,
    pages: 448,
    publisher: "Crown Publishing"
  },
  {
    title: "The Martian",
    author: "Andy Weir",
    genre: "Science Fiction",
    published_year: 2011,
    price: 13.25,
    in_stock: false,
    pages: 369,
    publisher: "Crown Publishing"
  },
  {
    title: "Educated",
    author: "Tara Westover",
    genre: "Memoir",
    published_year: 2018,
    price: 15.25,
    in_stock: true,
    pages: 352,
    publisher: "Random House"
  },
  {
    title: "The Midnight Library",
    author: "Matt Haig",
    genre: "Fantasy",
    published_year: 2020,
    price: 17.99,
    in_stock: true,
    pages: 304,
    publisher: "Canongate Books"
  }
]);

// ✅ Basic CRUD Queries

// 1️⃣ Find all books in a specific genre
db.books.find({genre: "Fiction"})

// 2️⃣ Find books published after a certain year
db.books.find({published_year:{$gt:2010}})

// 3️⃣ Find books by a specific author
db.books.find({author: "George Orwell"})

// 4️⃣ Update the price of a specific book
db.books.updateOne(
  { title: "The Great Gatsby" },
  { $set: { price: 13.49 } }
)

// 5️⃣ Delete a book by its title
db.books.deleteOne({ title: "1984" })

// ----------------------------------------------------
// 🧠 Task 3: Advanced Queries
// ----------------------------------------------------

// 1️⃣ Books that are in stock and published after 2010
db.books.find({
  in_stock: true,
  published_year: { $gt: 2010 }})

  // 2️⃣ Projection — return only title, author, and price
db.books.find({},{_id:0, title:1, author:1, price:1})

// 3️⃣ Sorting by price (ascending)
db.books.find().sort({ price: 1 })

// 4️⃣ Sorting by price (descending)
db.books.find().sort({ price: -1 })
  
// 5️⃣ Pagination — 5 books per page
// Page 1
db.books.find().limit(5)
// Page 2
db.books.find().skip(5).limit(5)

// ----------------------------------------------------
// ⚙️ Task 4: Aggregation Pipelines
// ----------------------------------------------------

// 1️⃣ Average price of books by genre
db.books.aggregate([
  { $group: { _id: "$genre", averagePrice: { $avg: "$price" } } }
])

// 2️⃣ Author with the most books
db.books.aggregate([
  { $group: { _id: "$author", totalBooks: { $sum: 1 } } },
  { $sort: { totalBooks: -1 } },
  { $limit: 1 }
])

// 3️⃣ Group books by publication decade and count them
db.books.aggregate([
  {
    $group: {
      _id: {
        decade: {
          $multiply: [
            { $floor: { $divide: ["$published_year", 10] } },
            10
          ]
        }
      },
      count: { $sum: 1 }
    }
  },
  { $sort: { "_id.decade": 1 } }
])

// ----------------------------------------------------
// ⚡ Task 5: Indexing
// ----------------------------------------------------

// 1️⃣ Create an index on the title field
db.books.createIndex({ title: 1 })

// 2️⃣ Create a compound index on author and published_year
db.books.createIndex({ author: 1, published_year: 1 })

// 3️⃣ Use explain() to show performance
db.books.find({ title: "The Hobbit" }).explain("executionStats")
db.books.find({ author: "Harper Lee", published_year: 1960 }).explain("executionStats")