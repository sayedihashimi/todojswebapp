import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';

createRoot(document.getElementsByTagName("body")[0]).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
