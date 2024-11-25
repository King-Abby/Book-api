const express = require("express");
const {
  getBooks,
  getBookById,
  createBook,
  updateBook,
  deleteBook,
} = require("../controllers/bookController");
const router = express.Router();

router.post("/createbook", createBook);
router.get("/:id", getBookById);
router.get("/", getBooks);
router.put("/:id", updateBook);
router.delete("/:id", deleteBook);

module.exports = router;
