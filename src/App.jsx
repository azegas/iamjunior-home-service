import Navbar from './NavBar';
import Home from '../pages/Home';
import Services from '../pages/Services';
import Contact from '../pages/Contact';
import About from '../pages/About';
import Login from '../pages/Login';
import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';

function App() {

  useEffect(() => {
    console.log('App component mounted');
  });

  return (
    <BrowserRouter>
        <Navbar />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
        </Routes>
    </BrowserRouter>
);
}

export default App;
