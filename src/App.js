import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
// import * as api from './services/api';
import Routes from './pages/Routes';
// import Search from './pages/Search';

function App() {
  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  );
}

export default App;
