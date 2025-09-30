import React from 'react';
// Zmieniamy import: zamiast całego pakietu 'react-dom', importujemy 'createRoot' 
// bezpośrednio z 'react-dom/client'
import { createRoot } from 'react-dom/client'; 
import reportWebVitals from './reportWebVitals';

import App from './App';
// import './index.css';
// import 'bootstrap/dist/css/bootstrap.min.css';

const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Failed to find the root element');

// 1. Tworzymy główny element renderujący
const root = createRoot(rootElement);

// 2. Wywołujemy metodę render na utworzonym obiekcie root
root.render(
 <React.StrictMode>
  <App />
 </React.StrictMode>
);

reportWebVitals();