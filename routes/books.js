import express from 'express'
import getBooks from '../services/books/getBooks';
import createBook from '../services/books/createBook';
import getBookById from '../services/books/getBookById';
import updateBookById from '../services/books/updateBookById';
import deleteBook from '../services/books/deleteBook';

// create a router instance
const router = express.Router();

router.get('/', (req, res) => {
    try {
      const { genre, available } = req.query;
      const books = getBooks(genre, available);
      res.status(200).json(books);
    } catch (error) {
      console.error(error);
      res.status(500).send('Something went wrong while getting list of books!');
    }
  });

// app.get('/books', (req, res) => {
//   try {
//     const books = getBooks()
//     res.status(200).json(books)
//   } catch (error) {
//     console.error(error)
//     res.status(500).send('Something went wrong while getting list of books!')
//   }
// });

//get by Id

router.get('/:id', (req, res) => {
    try {
      const { id } = req.params
      const book = getBookById(id)
  
      if (!book) {
        res.status(404).send(`Book with id ${id} was not found!`)
      } else {
        res.status(200).json(book)
      }
    } catch (error) {
      console.error(error)
      res.status(500).send('Something went wrong while getting book by id!')
    }
  });

  //post book

  router.post('/', (req, res) => {
    try {
      const { title, author, isbn, pages, available, genre } = req.body
      const newBook = createBook(title, author, isbn, pages, available, genre)
      res.status(201).json(newBook)
    } catch (error) {
      console.error(error)
      res.status(500).send('Something went wrong while creating new book!')
    }
  });
  // put method
  router.put('/:id', (req, res) => {
    try {
      const { id } = req.params
      const { title, author, isbn, pages, available, genre } = req.body
      const updatedBook = updateBookById(id, title, author, isbn, pages, available, genre)
      res.status(200).json(updatedBook)
    } catch (error) {
      console.error(error)
      res.status(500).send('Something went wrong while updating book by id!')
    }
  })

  //delete
  
  router.delete('/:id', (req, res) => {
    try {
      const { id } = req.params;
      const deletedBookId = deleteBook(id);
  
      if (!deletedBookId) {
        res.status(404).send(`Book with id ${id} was not found!`);
      } else {
        res.status(200).json({
          message: `Book with id ${deletedBookId} was deleted!`,
        });
      }
    } catch (error) {
      console.error(error);
      res.status(500).send('Something went wrong while deleting book by id!');
    }
  });

export default router;