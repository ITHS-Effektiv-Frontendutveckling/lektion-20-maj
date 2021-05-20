import './Book.css';

function Book({ book, chooseBook }) {
  return (
    <article className="book" onClick={ () => { chooseBook(book) }}
    style={{ backgroundColor: book.color }}>
      <section>
        <section>
          <h2>{ book.title }</h2>
          <h3>{ book.author }</h3>
        </section>
      </section>
    </article>
  )
}

export default Book;