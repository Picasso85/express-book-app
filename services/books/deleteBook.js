import bookData from '../../data/books.json' assert { type: 'json' };


const deleteBook = (id) => {
  const index = bookData.books.findIndex((book) => book.id === id);

  if (index === -1) {
    return null;
  }

  bookData.books.splice(index, 1); //to remove book
  return id;
};

export default deleteBook;
