import express from 'express'
import booksRouter from './routes/books.js'

const app = express();

// Middleware to parse incoming requests with JSON payloads
app.use(express.json());
app.use('/books', booksRouter);

app.get('/about', (req, res) => {
    const html = '<h1>About Us</h1><p>Welcome to our website!</p>';
    res.send(html);
  })
app.listen(3000, () => {
    console.log('Server is listening on port 3000')
  });