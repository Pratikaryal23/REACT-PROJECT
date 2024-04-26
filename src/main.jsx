import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import CategoryContexApi from './UI/CategoryContex.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CategoryContexApi>
    <App />
    </CategoryContexApi>
  
  </React.StrictMode>,
)
