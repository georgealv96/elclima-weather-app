import { Route, Routes, Navigate } from 'react-router-dom'
import './App.css'

import HomePage from './pages/HomePage/HomePage'
import LoginPage from './pages/LoginPage/LoginPage'
import SignupPage from './pages/SignupPage/SignupPage'
import LocationPage from './pages/LocationPage/LocationPage'
import PinnedLocationsPage from './pages/PinnedLocationsPage/PinnedLocationsPage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/mylocations" element={<PinnedLocationsPage />} />
      <Route path="/:id" element={<LocationPage />} />
    </Routes>
  )
}

export default App
