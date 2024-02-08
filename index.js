import express from 'express'
import booksRouter from './routes/books.js'

const app = express();

// Middleware to parse incoming requests with JSON payloads
app.use(express.json());

/* app.use(‘/books’, booksRouter), 
which tells Express to attach all the routes from the previous module
 to the server, to the “/books” route - this ensures that inside the books router,
  we can use relative URL paths (e.g. instead of “/books/:id”, we just used “/:id”). 
*/
app.use('/books', booksRouter);

app.get('/about', (req, res) => {
    const html = '<h1>About Us</h1><p>Welcome to our website!</p>';
    res.send(html);
  })
app.listen(3000, () => {
    console.log('Server is listening on port 3000')
  });