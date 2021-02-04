/*
 * Main App component
 */

import Header from './Components/Header';
import Footer from './Components/Footer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Views/Home';
import About from './Views/About';
import Product from './Views/Product';

function App() {
  return (
    <div className='relative pb-10 min-h-screen'>
      <Router>
        <Header />
        <div className='p-3'>
          <Switch>
            {/* Home route */}
            <Route exact path='/'>
              <Home />
            </Route>
            {/* About route */}
            <Route path='/about'>
              <About />
            </Route>
            {/* Product route */}
            <Route path='/products/:id'>
              <Product />
            </Route>
          </Switch>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
