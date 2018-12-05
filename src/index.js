import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Main from './Main';
import Screen from './components/Screen';

// import react router
import { BrowserRouter, Route } from 'react-router-dom'

const App = () => (
  <BrowserRouter>
    <div>
      <Route path="/" exact component={Main} />
      <Route path="/screen/:playlist" exact component={Screen} />
    </div>
  </BrowserRouter>
);

ReactDOM.render(<App />, document.getElementById('root'));
