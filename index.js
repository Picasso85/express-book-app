import express from 'express'
import getBooks from './services/books/getBooks.js'
import getBookById from './services/books/getBookById.js'
import createBook from './services/books/createBook.js'


const app = express();
app.use(express.json());

//get

app.get('/books', (req, res) => {
  try {
    const books = getBooks()
    res.status(200).json(books)
  } catch (error) {
    console.error(error)
    res.status(500).send('Something went wrong while getting list of books!')
  }
});

//get by Id

app.get('/books/:id', (req, res) => {
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

  app.post('/books', (req, res) => {
    try {
      const { title, author, isbn, pages, available, genre } = req.body
      const newBook = createBook(title, author, isbn, pages, available, genre)
      res.status(201).json(newBook)
    } catch (error) {
      console.error(error)
      res.status(500).send('Something went wrong while creating new book!')
    }
  });

app.listen(3000, () => {
  console.log('Server is listening on port 3000')
});