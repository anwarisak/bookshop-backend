import mongoose from "mongoose";

const booksScheme = mongoose.Schema({
  title: String,
  price: Number,
  category: {
    type: String,
  },
});

const newbooks = mongoose.model("Books", booksScheme);

export default newbooks;
