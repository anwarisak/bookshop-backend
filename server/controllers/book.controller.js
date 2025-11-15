import Books from "../models/book.model.js";

//get all books
export const getbooks = async (req, res) => {
  try {
    const book = await Books.find({});
    res.status(200).json(book);
  } catch (error) {
    res.status(500).json({ message: error.message || "Server error" });
  }
};

//get spasific book

export const getbook = async (req, res) => {
  const { id } = req.params;
  try {
    const book = await Books.findById(id);
    if (!book) {
      res.status(404).json({ message: "Book not found" });
    }
    res.status(200).json(book);
  } catch (error) {
    res.status(500).json({ message: error.message || "Server error" });
  }
};
//create book

export const createbook = async (req, res) => {
  try {
    const book = await Books.create(req.body);
    res.status(200).json(book);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message || "Server error" });
  }
};
// updated book

export const updatebook = async (req, res) => {
  try {
    const { id } = req.params;

    const book = await Books.findByIdAndUpdate(id, req.body);
    if (!book) {
      return res.status(404).json({ message: "Book not found" });
    }
    const updatebook = await Books.findById(id);
    res.status(200).json({ massage: "Book updated successfully", updatebook });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message || "Server error" });
  }
};

//delete book

export const deletebook = async (req, res) => {
  const { id } = req.params;
  try {
    const book = await Books.findByIdAndDelete(id);
    if (!book) {
      res.status(404).json({ message: "This book is not available" });
    } else {
      res.status(200).json({ massage: "deleted this book seccessfuly", id });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
