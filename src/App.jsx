// import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Login from "./Pages/Login";
import Blog from "./Pages/Blog";
import Shop from "./Pages/Shop";
import OurStory from "./Pages/OurStory";
import Faq from "./Pages/Faq";
import Contact from "./Pages/Contact"
import CheckOut from "./Pages/CheckOut";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Footer" element={<Footer />} />
        <Route path="/Navbar" element={<Navbar />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/Shop" element={<Shop />} />
        <Route path="/OurStory" element={<OurStory />} />
        <Route path="/Faq" element={<Faq />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/checkout" element={<CheckOut />} />
      </Routes>
    </Router>
  );
};

export default App;
