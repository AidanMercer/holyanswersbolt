import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import App from './App'
import MainAppPage from './pages/MainAppPage'
import { AuthProvider } from './context/AuthContext'
import { ChatProvider } from './context/ChatContext'
import PrivateRoute from './components/PrivateRoute'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router>
      <AuthProvider>
        <ChatProvider>
          <Routes>
            <Route path="/" element={<App />} />
            <Route 
              path="/app" 
              element={
                <PrivateRoute>
                  <MainAppPage />
                </PrivateRoute>
              } 
            />
          </Routes>
        </ChatProvider>
      </AuthProvider>
    </Router>
  </React.StrictMode>
)
