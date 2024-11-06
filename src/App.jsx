import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from "./Layout"
import Home from "./Pages/Home"
import About from "./Pages/About"
import Services from "./Pages/Services"
import Contact from "./Pages/Contact"
import Tariff from "./Home-Components/Vehicle/Tariff"
import Tabsection from './Components/Tabsection';
import Vehicledetails from './Home-Components/Vehicledetails';
import MaduraiPackage from './Components/ServiceSection/MaduraiPackage';
import KodaikanalPackage from './Components/ServiceSection/KodaikanalPackage';
import RameshwaramPackage from './Components/ServiceSection/RameshwaramPackage';
import FirstTabVehicle from './Home-Components/Vehicle/FirstTabVehicle';
import SecondTabVehicleCopy from './Home-Components/Vehicle/SecondTabVehicleCopy';
import ThirdTabVehicleCopy from './Home-Components/Vehicle/ThirdTabVehicleCopy';
import PalaniTab from './Home-Components/Vehicle/PalaniTab';
import ThiruchendurTab from './Home-Components/Vehicle/ThiruchendurTab';
import TrichyTab from './Home-Components/Vehicle/TrichyTab';
import Munnar from './Home-Components/Vehicle/Munnar';
import Thekkady from './Home-Components/Vehicle/Thekkady';
import Kanyakumari from './Home-Components/Vehicle/Kanyakumari';
import MaduRameshKanya from './Home-Components/Vehicle/MaduRameshKanya';
import MaduRamKanThiru from './Home-Components/Vehicle/MaduRamKanThiru';

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
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/tariff" element={<Tariff />} />
            <Route path="/tabsection" element={<Tabsection />} />
            <Route path="/packagedetails" element={<Packagedetails />} />
            <Route path="/vehicledetails" element={<Vehicledetails />} />
            <Route path="/maduraipackage" element={<MaduraiPackage />} />
            <Route path="/kodaikanalpackage" element={<KodaikanalPackage />} />
            <Route path="/rameshwarampackage" element={<RameshwaramPackage />} />
            <Route path="/firstTabVehicle" element={<FirstTabVehicle />} />
            <Route path="/secondTabVehicleCopy" element={<SecondTabVehicleCopy />} />
            <Route path="/thirdTabVehicleCopy" element={<ThirdTabVehicleCopy />} />
            <Route path="/palaniTab" element={<PalaniTab />} />
            <Route path="/thiruchendurTab" element={<ThiruchendurTab />} />
            <Route path="/TrichyTab" element={<TrichyTab />} />
            <Route path="/munnar" element={<Munnar />} />
            <Route path="/thekkady" element={<Thekkady />} />
            <Route path="/kanyakumari" element={<Kanyakumari />} />
            <Route path="/maduRameshKanya" element={<MaduRameshKanya />} />
            <Route path="/maduRamKanThiru" element={<MaduRamKanThiru />} />
            <Route path="/contact" element={<Contact />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
