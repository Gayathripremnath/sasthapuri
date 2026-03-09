import { useState } from 'react'
import './App.css'
import Home from './Components/Home'
import Sidebar from './Components/Sidebar'
import Navbar from './Components/Navbar'

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }

  return (
    <div className="app-container">
      <Navbar onMenuClick={toggleSidebar} />
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
      <main>
        <Home />
      </main>
    </div>
  )
}

export default App
