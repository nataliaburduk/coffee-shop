import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import AppRouter from './components/router/router';

import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
// root.use(express.static(path.join(__dirname,'client','build')));
root.render(
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>
);
