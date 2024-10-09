import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from "./Layout"
import Home from "./Pages/Home"
import About from "./Pages/About"
import Services from "./Pages/Services"
import Contact from "./Pages/Contact"
import Tariff from "./Home-Components/Vehicle/Tariff"
// import Tabsection from './Components/Tabsection';
import Vehicledetails from './Home-Components/Vehicledetails';
import MaduraiPackage from './Components/ServiceSection/MaduraiPackage';
import KodaikanalPackage from './Components/ServiceSection/KodaikanalPackage';
import RameshwaramPackage from './Components/ServiceSection/RameshwaramPackage';

import AOS from 'aos';
import 'aos/dist/aos.css';
import Loading from './Components/Loading';
import Packagedetails from './Home-Components/Packagedetails';


function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: true, // Whether animation should happen only once - while scrolling down
    });

    setTimeout(() => {
      setLoading(false);
    }, 2000); // Adjust the time as needed
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/tariff" element={<Tariff/>} />
          {/* <Route path="/tabsection" element={<Tabsection/>} /> */}
          <Route path="/packagedetails" element={<Packagedetails/>} />
          <Route path="/vehicledetails" element={<Vehicledetails/>} />
          <Route path="/maduraipackage" element={<MaduraiPackage/>} />
          <Route path="/kodaikanalpackage" element={<KodaikanalPackage/>} />
          <Route path="/rameshwarampackage" element={<RameshwaramPackage/>} />
          <Route path="/contact" element={<Contact />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
