
import Header from './components/Header'
import Home from './screens/Home'
import About from './screens/About'
import Signup from './screens/Signup'
import Foother from './components/Foother'
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './screens/Login'

const App = () => {


  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Foother/>
    </Router>
  )
}

export default App
