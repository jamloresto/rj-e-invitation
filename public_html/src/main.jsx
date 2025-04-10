import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './assets/css/global.css';
import "./assets/css/tailwind.css";
import App from './App.jsx';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
