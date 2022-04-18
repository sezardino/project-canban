import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  // eslint-disable-line @typescript-eslint/no-non-null-assertion
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
