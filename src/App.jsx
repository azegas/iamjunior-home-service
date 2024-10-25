// TODO implement aboslute paths with @ 'npm install path?' instead of ../../
import Navbar from './components/layout/NavBar';
import Home from './pages/Home';
import Services from './pages/Services';
import Contact from './pages/Contact';
import About from './pages/About';
import Login from './pages/Login';
import SearchResults from './pages/SearchResults';
import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './styles/global.scss';
import './styles/reset.css';

function App() {

  const [services, setServices] = useState([]);
  const [businesses, setBusinesses] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/services')
    .then(response => response.json())
    .then(data => setServices(data));
  }, []);

  useEffect(() => {
    fetch('http://localhost:8000/businesses')
    .then(response => response.json())
    .then(data => setBusinesses(data));
  }, []);

  return (
    <BrowserRouter>
      <div className="app">
        <Navbar />
        <Routes>
            <Route path="/" element={<Home services={services} businesses={businesses} />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
            <Route path="/search/:serviceName" element={<SearchResults services={services} businesses={businesses} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
