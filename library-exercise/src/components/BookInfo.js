import './BookInfo.css';

function BookInfo({ book, close }) {
  return (
    <section className="book-info">
      <div className="book-info__wrapper">
        <header>
          <a href="#" role="button" className="back" onClick={ () => { close('') }}>&leftarrow;</a>
        </header>
        <section className="display">
        </section>
        <section className="info">
          <h2>{ book.title }</h2>
          <h3>{ book.author }</h3>
          <p>{ book.plot }</p>
          <footer>
            <p>Audience: { book.audience }</p>
            <p>First published: { book.year }</p>
            <p>Pages: { book.pages }</p>
            <p>Publisher: { book.publisher }</p>
          </footer>
        </section>
      </div>
    </section>
  )
}

export default BookInfo;