import React from 'react';
//import * as ReactDOM from 'react-dom/client'
import App from './components/App';
// import { render } from 'react-dom'
 import { createRoot } from 'react-dom/client';
 import { BrowserRouter as Router, Switch, Route, Link, BrowserRouter } from 'react-router-dom';

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );



