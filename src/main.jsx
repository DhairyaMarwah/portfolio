import React from 'react';
import ReactDOM from 'react-dom'; 
// import App from './App'; 
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Home from "./Pages/Home.jsx";
// import About from './pages/About';
// import Navbar from './components/Navbar';
// import Experience from './pages/Experience';
// import Education from './pages/Education';
// import Contact from './pages/Contact';
// import Footer from './components/Footer';
ReactDOM.render(
  <BrowserRouter>
  {/* <Navbar/> */}
    <Routes>
      <Route path="/" element={<Home />} />
      {/* <Route path="about" element={<About />} /> */}
      {/* <Route path="/" element={<Home />} />
      <Route path="experience" element={<Experience />} />
      <Route path="education" element={<Education />} />
      <Route path="contact" element={<Contact />} /> */}
    </Routes>
    {/* <Footer/> */}
  </BrowserRouter>,
  document.getElementById('root')
);
 