import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router'

import './styles/index.css'
import LandingPage from './pages/LandingPage/index.tsx'
import LoginPage from './pages/AuthPage/LoginPage/index.tsx'
import RegisterPage from './pages/AuthPage/RegisterPage/index.tsx'
import AdminPage from './pages/Admin/index.tsx'
import DashboardPage from './pages/DashboardPage/index.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
