import { Switch, Route } from 'react-router-dom';
import './App.css';

import BookInfo from './views/BookInfo';
import Books from './views/Books';

/**
 * App.js - Innehåller våra routes
 * Books.js - Renderar ut alla böcker - View
 * Book.js - Visar en bok
 * BookInfo.js - Visar mer information om en bok - View
 */

function App() {
  return (
    <section className="library">
      <div className="wrapper">
        <Switch>
          <Route path="/" component={ Books } exact />
          <Route path="/book/:id" component={ BookInfo } />
        </Switch>
      </div>
    </section>
  );
}

export default App;
