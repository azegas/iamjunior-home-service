import { useState } from 'react';

// icons is https://react-icons.github.io/react-icons/
import { MdPlumbing } from "react-icons/md";
import { GiAutoRepair } from "react-icons/gi";
import { GiPaintRoller } from "react-icons/gi";
import { GiVacuumCleaner } from "react-icons/gi";
import { FcElectricity } from "react-icons/fc";
import { FaTruck } from "react-icons/fa";

function TextInput() {
    // at the beginning the value is empty
    // if we want to change the value we need to modify the setValue
    const [value, setValue] = useState("");
  
    const handleChange = (e) => {
      setValue(e.target.value); // using e and whatever is in it
    };
  
    return (
      <div>
        <input type="text" placeholder="Search for a service" value={value} onChange={handleChange} />
        <p>{value}</p>
      </div>
    );
  }

const Home = () => {
    return (
        <div className="home">
            <div className="title">
                <h1>Find Home <span style={{color: 'var(--main-color)'}}>Service/Repair</span> Near You</h1>
            </div>
            <div className="subtitle">
                <p>Explore the best home services in your area</p>
            </div>
            <div className="search">
                <TextInput />
            </div>
            <section className="services">
                <div className="service">
                    <h3>Cleaning</h3>
                    <GiVacuumCleaner className="logo" style={{color: 'red'}}/>
                </div>
                <div className="service">
                    <h3>Repair</h3>
                    <GiAutoRepair className="logo" style={{color: 'green'}}/>
                </div>
                <div className="service">
                    <h3>Painting</h3>
                    <GiPaintRoller className="logo" style={{color: 'blue'}}/>
                </div>
                <div className="service">
                    <h3>Shifting</h3>
                    <FaTruck className="logo" style={{color: 'orange'}}/>
                </div>
                <div className="service">
                    <h3>Plumbing</h3>
                    <MdPlumbing className="logo" style={{color: 'purple'}}/>
                </div>
                <div className="service">
                    <h3>Electric</h3>
                    <FcElectricity className="logo" style={{color: 'yellow'}}/>
                </div>
            </section>
        </div>
    );
}

export default Home;