import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import Home from "./Components/Home";
import About from "./Components/About";
import Navbar from "./Components/Navbar";
import Sidebar from "./Components/Sidebar";
import Footer from "./Components/Footer";
import Gallery from "./Components/Gallery";
import Restaurant from "./Components/Restaurant";
import RoomDetails from "./Components/RoomDetails";
import Attractions from "./Components/Attractions";
import Rooms from "./Components/Rooms";
import Room1 from "./Components/Room1";
import Room2 from "./Components/Room2";
import Room3 from "./Components/Room3";
import ScrollToTop from "./Components/ScrollToTop";
import Services from "./Components/Services";
import Reservation from "./Components/Reservation";

function App() {

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => setIsSidebarOpen(false);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar onMenuClick={toggleSidebar} />
      <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/restaurant" element={<Restaurant />} />
        <Route path="/room-details" element={<RoomDetails />} />
        <Route path="/attractions" element={<Attractions />} />
        <Route path="/rooms" element={<Rooms />} />
        <Route path="/room-1" element={<Room1 />} />
        <Route path="/room-2" element={<Room2 />} />
        <Route path="/room-3" element={<Room3 />} />
        <Route path="/services" element={<Services />} />
        <Route path="/reservation" element={<Reservation />} />
      </Routes>

      <Footer />

    </BrowserRouter>
  );
}

export default App;