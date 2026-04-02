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
import Attractions from "./Components/Attractions";
import Rooms from "./Components/Rooms";

import ScrollToTop from "./Components/ScrollToTop";
import Facilities from "./Components/Facilities";
import Reservation from "./Components/Reservation";
import Contact from "./Components/Contact";
import MultiCuisine from "./Components/MultiCuisine";
import ConferenceHall from "./Components/ConferenceHall";
import BusinessCenter from "./Components/BusinessCenter";
import ExecutiveSuite from "./Components/ExecutiveSuite";
import StandardDeluxe from "./Components/StandardDeluxe";
import DeluxeRoom from "./Components/DeluxeRoom";

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
        <Route path="/attractions" element={<Attractions />} />
        <Route path="/rooms" element={<Rooms />} />

        <Route path="/facilities" element={<Facilities />} />
        <Route path="/reservation" element={<Reservation />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/multi-cuisine" element={<MultiCuisine />} />
        <Route path="/conference-hall" element={<ConferenceHall />} />
        <Route path="/business-center" element={<BusinessCenter />} />
        <Route path="/room-executive-suite" element={<ExecutiveSuite />} />
        <Route path="/room-standard-deluxe" element={<StandardDeluxe />} />
        <Route path="/room-deluxe" element={<DeluxeRoom />} />
      </Routes>

      <Footer />

    </BrowserRouter>
  );
}

export default App;