import React from 'react';
import Navbar from './Componets/Navbar';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Componets/Home';
import Contact from './Componets/Contact';
import About from './Componets/About';
import Footer from './Componets/Footer';


function App() {
  return (
    <>

      <BrowserRouter>
      <Navbar/>
       <Routes>
          <Route index element={<Home/>} />
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>} />
       </Routes>
       <Footer/>
        
      
       
      
       </BrowserRouter>
    </>
  );
}

export default App;
