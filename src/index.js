import React from 'react';
import ReactDOM from 'react-dom';
import { BookProvider } from "./context/books";
import App from './App';
import './index.css';
import { CartProvider } from './context/cart';

import { createRoot } from 'react-dom/client';
const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<BookProvider>
  <CartProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </CartProvider>
</BookProvider>);