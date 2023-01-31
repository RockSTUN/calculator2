import React from 'react';
//redux
import { Provider } from 'react-redux';
//bootstrap
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
//navigator
import { BrowserRouter } from 'react-router-dom';
import Navigation from './Router/Navigation';
import Main from './Router/Main';
import './index.css';
//components

function App() {
  return (
    <BrowserRouter>
      <Navigation/>
      <Main/>
    </BrowserRouter>
  );
}

export default App;
