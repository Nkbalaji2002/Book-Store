import express from "express";
// import { DATABASE_URL, FRONTEND_URL, PORT } from "./config.js";
import { connectDB } from "./db/connectDB.js";
import { BookRoute } from "./routes/book.route.js";
import cors from "cors";
import bodyParser from "body-parser";
import { config } from "dotenv";
config();

connectDB(process.env.DATABASE_URL);

const port = process.env.PORT;
const app = express();

// middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// cors policy
app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type"],
  })
);

// routes
app.use("/books", BookRoute);

// app.get("/", (req, res) => {
//   // console.log(req);
//   return res.status(234).send("Welcome to MERN Stack Tutorial");
// });

app.listen(port, () => console.log(`Server running on ${port}`));
