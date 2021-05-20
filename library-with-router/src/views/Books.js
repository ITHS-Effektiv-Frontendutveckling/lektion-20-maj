import books from '../assets/childrensbooks.json';

import Book from '../components/Book';

function Books() {
  return (
    <section className="books">
      { books.map((book) => {
        return <Book book={ book } key={ book.id } />
      })}
    </section>
  )
}

export default Books;