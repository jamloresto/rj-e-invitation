import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './assets/css/tailwind.css';
import App from './components/sample.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
