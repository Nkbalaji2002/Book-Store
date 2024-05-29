import express from "express";
import {
  createBooks,
  deleteBooks,
  getBooks,
  getBooksId,
  updateBooks,
} from "../controllers/book.controller.js";

const router = express.Router();

router.get("/", getBooks);
router.get("/:id", getBooksId);

router.post("/", createBooks);

router.put("/:id", updateBooks);

router.delete("/:id", deleteBooks);

export const BookRoute = router;
