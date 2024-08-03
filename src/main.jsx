import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/nav'
import './index.css'
import HOME from './components/homepage'
// hello this is made by rps
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <HOME />
  </React.StrictMode>,
)
