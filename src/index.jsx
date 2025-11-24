// 1. Import React and ReactDOM
import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles.css';

// 2. Import your main component
import App from './App.jsx';

// 3. Find the container element in the index.html file
const rootElement = document.getElementById('root');

// 4. Create the root and render your main component into it
ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);