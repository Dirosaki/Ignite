import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import GlobalStyle from './global.js'

// Paginas
import Home from './view/home/';
import ProfileCompany from './view/ProfileCompany/';

function App() {
  return (
    <>
    <Router>
      <Route exact path='/' exact component={Home}/>
      <Route exact path='/company' exact component={ProfileCompany}/>
    </Router>
    <GlobalStyle />
    </>
  );
}

export default App;
