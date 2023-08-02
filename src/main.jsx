import React from 'react'
import ReactDOM from 'react-dom/client'
import { AppStore } from './AppStore'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <React.StrictMode>
      <AppStore></AppStore>
    </React.StrictMode>
  </BrowserRouter>
)
