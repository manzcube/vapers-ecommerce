import React from 'react';
import ReactDOM from 'react-dom/client';
import './style/index.css';
import App from './App';

// router
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
