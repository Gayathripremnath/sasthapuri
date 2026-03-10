import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './Components/Home'
import Sidebar from './Components/Sidebar'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }

  const closeSidebar = () => setIsSidebarOpen(false)

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={(
            <div className="app-container">
              <Navbar onMenuClick={toggleSidebar} />
              <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar} />
              <Home />
              <Footer />
             
            </div>
          )}
        />
      </Routes>
    </Router>
    
  )
}

export default App
