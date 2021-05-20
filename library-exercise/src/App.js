import { useState } from 'react';
import './App.css';
import books from './assets/childrensbooks.json';

import Book from './components/Book';
import BookInfo from './components/BookInfo';

/**
 * App.js - listar alla böcker och togglar mellan att visa alla böcker och en bok
 * Book.js - Visar en bok
 * BookInfo.js - Visar mer information om en bok
 */


function App() {
  const [currentBook, setCurrentBook] = useState('');

  return (
    <section className="library">
      <div className="wrapper">
        { currentBook ? <BookInfo book={ currentBook } close={ setCurrentBook } /> :
          <section className="books">
              { books.map((book) => {
                return <Book book={ book } chooseBook={ setCurrentBook } key={ book.id } />
              })}
          </section> }
      </div>
    </section>
  );
}

export default App;
