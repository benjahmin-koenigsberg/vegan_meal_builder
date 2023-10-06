import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { FoodProvider } from './context/FoodContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <FoodProvider>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </FoodProvider>
);
