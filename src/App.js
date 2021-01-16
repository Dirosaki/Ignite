import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import GlobalStyle from './global.js'

// Paginas
import Home from './view/home/';

function App() {
  return (
    <>
    <Router>
      <Route exact path='/' exact component={Home}/>
    </Router>
    <GlobalStyle />
    </>
  );
}

export default App;
