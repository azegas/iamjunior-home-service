// TODO implement aboslute paths with @ 'npm install path?' instead of ../../
import Navbar from './components/layout/NavBar';
import Home from './pages/Home';
import Services from './pages/Services';
import Contact from './pages/Contact';
import About from './pages/About';
import Login from './pages/Login';
import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {

  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/services')
    .then(response => 
      response.json())
    .then(data => 
      {console.log(data);
      setServices(data);
    })
    }, []);

  return (
    <BrowserRouter>
      <div className="app">
        <Navbar />
        <Routes>
            <Route path="/" element={<Home services={services} />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
