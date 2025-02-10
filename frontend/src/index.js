import React from 'react';
import ReactDOM from 'react-dom/client'; // Import from 'react-dom/client' in React 18
import App from './App';
import './styles.css';

const root = ReactDOM.createRoot(document.getElementById('root')); // Correct method for React 18
root.render(<App />);
