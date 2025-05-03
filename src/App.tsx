
import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import Avatar from './pages/Avatar'
import Settings from './pages/Settings'
import VipPage from './pages/VipPage'
import GameDetail from './pages/GameDetail'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/avatar" element={<Avatar />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/vip" element={<VipPage />} />
          <Route path="/game/smeshariki" element={<GameDetail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
