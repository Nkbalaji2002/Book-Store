import express from "express";
import { DATABASE_URL, FRONTEND_URL, PORT } from "./config.js";
import { connectDB } from "./db/connectDB.js";
import { BookRoute } from "./routes/book.route.js";
import cors from "cors";

const app = express();

connectDB(DATABASE_URL);

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// cors policy
app.use(
  cors({
    origin: FRONTEND_URL,
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type"],
  })
);

// routes
app.use("/books", BookRoute);

app.get("/", (req, res) => {
  console.log(req);
  return res.status(234).send("Welcome to MERN Stack Tutorial");
});

app.listen(PORT, () => console.log(`Server running on ${PORT}`));
