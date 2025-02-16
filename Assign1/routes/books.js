// routes/books.js
const express = require('express');
const router = express.Router();

let books = [
  { id: 1, title: "Chainsaw Man", author: "Tatsuki Fujimoto", imageUrl: "/chainsawman.jpg", year: 2018 },
  { id: 2, title: "Jujutsu Kaisen", author: "Gege Akutami", imageUrl: "/jujustukaisen.jpg", year: 2018 },
  { id: 3, title: "Oshi no Ko", author: "Aka Akasaka", imageUrl: "/oshinoko.jpg", year: 2020 },
  { id: 4, title: "Blue Lock", author: "Muneyuki Kaneshiro", imageUrl: "/bluelock.jpg", year: 2018 },
  { id: 5, title: "Kaiju No. 8", author: "Naoya Matsumoto", imageUrl: "/kaiju.jpg", year: 2020 },
  { id: 6, title: "Dandadan", author: "Yukinobu Tatsu", imageUrl: "/dandadan.jpg", year: 2021 },
  { id: 7, title: "Sakamoto Days", author: "Yuto Suzuki", imageUrl: "/sakamoto.jpg", year: 2020 },
  { id: 8, title: "Frieren: Beyond Journey's End", author: "Kenta Shinohara", imageUrl: "/frieren.jpg", year: 2020 },
  { id: 9, title: "Witch Hat Atelier", author: "Kamome Shirahama", imageUrl: "/witchhat.jpg", year: 2016 },
  { id: 10, title: "The Elusive Samurai", author: "Yusei Matsui", imageUrl: "/samurai.jpg", year: 2021 }
];


// Get all books
router.get('/', (req, res) => {
  res.json(books);
});

// Get a specific book by ID
router.get('/:id', (req, res) => {
  const book = books.find(b => b.id == req.params.id);
  if (!book) return res.status(404).json({ error: "Book not found" });
  res.json(book);
});

// POST a new book
router.post('/', (req, res) => {
  const { id, title, author, imageUrl, year } = req.body;
  books.push({ id, title, author, imageUrl, year });
  res.status(201).json({ message: "Book added!" });
});

// PUT to update a book
router.put('/:id', (req, res) => {
  const book = books.find(b => b.id == req.params.id);
  if (!book) return res.status(404).json({ error: "Book not found" });

  const { title, author, imageUrl, year } = req.body;
  book.title = title || book.title;
  book.author = author || book.author;
  book.imageUrl = imageUrl || book.imageUrl;
  book.year = year || book.year;

  res.json({ message: "Book updated!", book });
});

// DELETE a book by ID
router.delete('/:id', (req, res) => {
  const index = books.findIndex(b => b.id == req.params.id);
  if (index === -1) return res.status(404).json({ error: "Book not found" });

  books.splice(index, 1);
  res.json({ message: "Book deleted!" });
});

module.exports = router;
