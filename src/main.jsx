import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { LoginProvider } from './components/LoginProvider/LoginProvider.jsx'
import { SupabaseProvider } from './Providers/SupabaseProvider.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <SupabaseProvider>
    <LoginProvider>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </LoginProvider>
    </SupabaseProvider>
  </React.StrictMode>,
)
