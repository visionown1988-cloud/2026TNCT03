import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// FORCE RESET TO HOME ON RELOAD
// This ensures that whenever the app loads (initial visit or refresh), 
// it ignores the previous hash path and starts at the Home page.
window.location.hash = '/';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);