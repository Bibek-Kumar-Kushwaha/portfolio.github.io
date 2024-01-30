import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from "./Component/Navbar";
import About from "./Component/About";
import Project from "./Component/Project";
import Contact from "./Component/Contact";
import Home from "./Component/Home";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
           <Route path='/Home' element={<Home/>}/> 
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/project" element={<Project />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}
