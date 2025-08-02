import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// this project is using Bootstrap for styling
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
