import React from 'react'
import ReactDOM from 'react-dom/client'

/**
 * LingoDash Main Entry Point
 * * To ensure this works perfectly in your GitHub repository where all files 
 * are in the same folder, we have consolidated the logic. 
 * * If you are using this on your local machine with Vite, make sure your
 * App.jsx file is in the same folder as this main.jsx file.
 */

// If you decide to keep App.jsx as a separate file in the same folder:
import App from './app.jsx'

const rootElement = document.getElementById('root');

if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  );
}
