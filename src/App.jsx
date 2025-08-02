import React from 'react'
import Header from './components/Header'
import Home from './screens/Home'
import About from './screens/About'
import Foother from './components/Foother'
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Foother/>
    </Router>
  )
}

export default App
