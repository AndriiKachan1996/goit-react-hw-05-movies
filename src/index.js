import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import './index.css';
import { App } from 'components/App/App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter basename="goit-react-hw-05-movies">
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>
);
