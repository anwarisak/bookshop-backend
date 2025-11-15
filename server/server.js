import express from "express";
import connectdb from "./config/DB.js";
import Books from "./models/book.model.js";
import bookroute from "./routes/book.route.js";
const app = express();
import dotenv from "dotenv";
dotenv.config();


app.use(express.json());
const PORT = 8000;
//connection
connectdb();
// routes
app.use("/api/books/", bookroute);
//Server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
