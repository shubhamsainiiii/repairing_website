import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import OurServices from './pages/OurServices';
import Faq from './pages/Faq';
import Contact from './pages/Contact';
import Acrepair from './pages/services/AcRepair';
import GeyserRepair from './pages/services/GeyserRepair';
import MicrowaveRepair from './pages/services/MicrowaveRepair';
import RefrigeratorRepair from './pages/services/RefrigeratorRepair';
import LedTvRepair from './pages/services/LedTvRepair';
import WashingMachineRepair from './pages/services/WashingMachineRepair';
import WaterCoolerRepair from './pages/services/WaterCoolerRepair';
import WaterDispenserRepair from './pages/services/WaterDispenserRepair';
import CctvRepair from './pages/services/CctvRepair';
import RoPurifierRepair from './pages/services/RoPurifierRepair';
import ChimneyRepair from './pages/services/ChimneyRepair';
import AirDryer from './pages/services/AirDryer';
import AirCompressor from './pages/services/AirCompressor';
import Privacy from './pages/Privacy';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/services", element: <OurServices /> },
      { path: "/services/acrepair", element: <Acrepair /> },
      { path: "/services/gyser", element: <GeyserRepair /> },
      { path: "/services/microwave", element: <MicrowaveRepair /> },
      { path: "/services/refrigerator", element: <RefrigeratorRepair /> },
      { path: "/services/ledtv", element: <LedTvRepair /> },
      { path: "/services/washingmachine", element: <WashingMachineRepair /> },
      { path: "/services/watercooler", element: <WaterCoolerRepair /> },
      { path: "/services/waterdispenser", element: <WaterDispenserRepair /> },
      { path: "/services/cctv", element: <CctvRepair /> },
      { path: "/services/ropurifier", element: <RoPurifierRepair /> },
      { path: "/services/chimney", element: <ChimneyRepair /> },
      { path: "/services/dryer", element: <AirDryer /> },
      { path: "/services/compressor", element: <AirCompressor /> },
      { path: "/faq", element: <Faq /> },
      { path: "/contact", element: <Contact /> },
      { path: "/policy", element: <Privacy /> }
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;