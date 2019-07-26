import React from 'react';
import './App.css';

import { BrowserRouter as Router, Route} from 'react-router-dom';
import NavigationBar from './components/layout/navigationBar'
import Counter from './components/counter'
import Footer from './components/layout/footer'

import About from './components/pages/about'
import Products from './components/pages/products'

function App() {
  return (
    <Router>
    <div className='App'>
      <div>
        <NavigationBar />
        <Route exact path='/' render={props => (
          <React.Fragment>
            <Counter />
          </React.Fragment>
        )} />
        <Route path='/about' component={About} />
        <Route path='/products' component={Products} />
        <Footer />
      </div>
    </div>
    </Router>
  );
}

export default App;