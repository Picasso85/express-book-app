import bookData from '../../data/books.json' assert { type: "json" };

const getBookById = (id) => {
  return bookData.books.find(book => book.id === id);
}

export default getBookById;