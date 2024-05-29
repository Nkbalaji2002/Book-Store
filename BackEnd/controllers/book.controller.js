import { Book } from "../models/BookModel.js";

// Route for Save a new Book
const createBooks = async (req, res) => {
  try {
    if (!req.body.title || !req.body.author || !req.body.publishYear) {
      return res.status(400).send({
        message: "Send all required fields: title, author, publishYear",
      });
    }

    const newBook = {
      title: req.body.title,
      author: req.body.author,
      publishYear: req.body.publishYear,
    };

    const result = await Book.create(newBook);
    return res.status(201).send(result);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

// Route for get all books
const getBooks = async (req, res) => {
  try {
    const result = await Book.find({});
    res.status(200).json({ count: result.length, data: result });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

// Route for get one book from database by id
const getBooksId = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await Book.findById(id);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

// updated for particular books based on id
const updateBooks = async (req, res) => {
  try {
    const { id } = req.params;

    const result = await Book.findByIdAndUpdate(id, req.body);

    if (!result) {
      return res.status(404).json({ message: "Book Not Found." });
    }

    res.status(201).json({ message: "Book Updated Successfully." });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

const deleteBooks = async (req, res) => {
  try {
    const { id } = req.params;

    const result = await Book.findByIdAndDelete(id);

    if (!result) {
      return res.status(404).json({ message: "Book Not Found." });
    }

    res.status(201).json({ message: "Book Deleted Successfully." });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

export { createBooks, getBooks, getBooksId, updateBooks, deleteBooks };
