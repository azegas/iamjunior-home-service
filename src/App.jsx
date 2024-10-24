import Navbar from './NavBar';
import Home from './Home';
import Services from './Services';
import Contact from './Contact';
import About from './About';
import { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


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
        </Routes>
    </BrowserRouter>
);
}

export default App;
