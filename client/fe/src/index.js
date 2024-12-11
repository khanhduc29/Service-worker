import React from 'react';
import ReactDOM from 'react-dom/client'; // Import từ 'react-dom/client' thay vì 'react-dom'
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorkerRegistration';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Đăng ký service worker
serviceWorker.register();
