import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Landing from './pages/landing/Landing.tsx'
import Dashboard from './pages/dashboard/Dashboard.tsx'
import Exercises from './pages/exercises/Exercises.tsx'
import Settings from './pages/settings/Settings.tsx'
import History from './pages/history/History.tsx'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<Landing />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path='/exercises' element={<Exercises />}/>
        <Route path="/history" element={<History />}/>
        <Route path="/settings" element={<Settings />}/>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
