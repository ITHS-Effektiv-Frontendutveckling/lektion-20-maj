import './BookInfo.css';
import { useParams, useHistory } from 'react-router-dom';
import { useState, useEffect } from 'react';

import books from '../assets/childrensbooks.json';

function BookInfo() {
  const { id } = useParams();
  const history = useHistory();
  const [book, setBook] = useState({});
  console.log('ID:', typeof id);

  //Körs när id har populerats med ett värde
  useEffect(() => {
    const selectedBook = books.filter((bookObj) => {
      return bookObj.id === parseInt(id)
    });

    console.log('Selected book:', selectedBook);
    setBook(selectedBook[0]);
  }, [id]);

  return (
    <section className="book-info">
      <div className="book-info__wrapper">
        <header>
          <button className="back" onClick={ () => { history.push('/') }}>&#8592;</button>
        </header>
        <section className="display">
          <article className="book" style={{ backgroundColor: book.color }}>
            <section className="bg"></section>
            <section className="content">
              <aside></aside>
              <section className="about">
                <h2>{ book.title }</h2>
                <h3>{ book.author }</h3>
              </section>
            </section>
          </article>
        </section>
        <section className="info">
          <h2>{ book.title }</h2>
          <h3>{ book.author }</h3>
          <p>{ book.plot }</p>
          <footer>
            <p><b>Audience:</b> { book.audience }</p>
            <p><b>First published:</b> { book.year }</p>
            <p><b>Pages:</b> { book.pages }</p>
            <p><b>Publisher:</b> { book.publisher }</p>
          </footer>
        </section>
      </div>
    </section>
  )
}

export default BookInfo;