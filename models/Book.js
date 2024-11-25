const mongoose = require("mongoose");

const genreEnum = ["Comedy", "Romance", "Tragedy", "Horror"];

const BookSchema = mongoose.Schema({
  bookTitle: {
    type: String,
    required: [true, "Please enter book title"],
    maxlength: [100, "Title must be at least 12 characters"],
  },
  author: {
    type: String,
    required: [true, "Please enter author's name"],
    maxlength: [50, "Author's name must be at least 100 characters"],
  },
  genre: {
    type: String,
    required: true,
    enum: ["COMEDY", "ROMANCE", "TRAGEDY", "HORROR"],
    uppercase: true,
  },
});

// const { BookTitle, Author, Genre } = BookSchema.obj;
// console.log(BookTitle, Author, Genre);/

module.exports = mongoose.model("Book", BookSchema);

// const names = ["iyiola", "john", "blessing","victoria"]