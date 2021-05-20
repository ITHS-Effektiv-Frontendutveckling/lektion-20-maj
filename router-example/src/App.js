import './App.css';
import { Route, Switch } from 'react-router-dom';

import Home from './views/Home';
import About from './views/About';
import Error from './views/Error';
import Navbar from './components/Navbar';

/**
 * Navbar.js - Meny
 * Home.js - Startsida
 * About.js - Om - sida
 * Error.js - Om ingen matchande url hittades
 */

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route path="/" component={ Home } exact /> { /* Vi använder exact här för att enbart matcha mot ett / */}
        <Route path="/about" component={ About } />
        <Route component={ Error } /> { /** Om ingen path matchas mot url:en visa denna route */ }
      </Switch>
    </div>
  );
}

export default App;
